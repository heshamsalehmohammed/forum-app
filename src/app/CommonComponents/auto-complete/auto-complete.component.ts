import {Component,EventEmitter,OnInit,Type} from '@angular/core';
import {CountryService} from './../../services/countryservice';
import {AutoComplete} from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {


  contentComponent!: Type<any>;
  contentComponentInputs: Record<string,any>={};

  countries: any[]|undefined;

  selectedCountries: any[]|undefined;

  filteredCountries: any[]=[];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.contentComponent=AutoComplete;
    this.countryService.getCountries().then((countries) => {
      this.countries=countries;
      this.filteredCountries=countries;
    });

    let filterEvent = new EventEmitter();
    filterEvent.subscribe(this.filterCountry.bind(this))
    this.contentComponentInputs={
      suggestions: this.filteredCountries,
      completeMethod: filterEvent,
      multiple: true,
    }
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[]=[];
    let query=event.query;

    for(let i=0;i<(this.countries as any[]).length;i++) {
      let country=(this.countries as any[])[i];
      if(country.name.toLowerCase().indexOf(query.toLowerCase())==0) {
        filtered.push(country);
      }
    }

    this.filteredCountries=filtered;
    this.contentComponentInputs['suggestions'] = filtered;
  }
}
