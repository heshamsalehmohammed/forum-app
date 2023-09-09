import {Component} from '@angular/core';


interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  cities!: City[];

  selectedCities!: City[];

  ngOnInit() {
    this.cities=[
      {name: 'New York',code: 'NY'},
      {name: 'Rome',code: 'RM'},
      {name: 'London',code: 'LDN'},
      {name: 'Istanbul',code: 'IST'},
      {name: 'Paris',code: 'PRS'}
    ];
  }
}
