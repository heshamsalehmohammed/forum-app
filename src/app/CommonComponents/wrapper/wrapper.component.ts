//@ts-nocheck
import {
    Component,
    ComponentFactoryResolver,
    Input,
    OnInit,
    Type,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

@Component({
    selector: 'app-wrapper',
    template: `
          <ng-template #contentPlaceholder></ng-template>
    `,
    styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
    @Input() bodyComponent: Type<any>;
    @Input() bodyComponentInputs: Record<string,any>={};
    @ViewChild('contentPlaceholder',{read: ViewContainerRef,static: true})
    contentPlaceholderRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit() {
        this.loadBodyComponent();
    }

    loadBodyComponent() {
        // This is improved version from official site:
        // https://angular.io/guide/dynamic-component-loader
        // it needs no directive and is more robust

        const componentFactory=this.componentFactoryResolver.resolveComponentFactory(
            this.bodyComponent
        );

        this.contentPlaceholderRef.clear();

        const newComponent=this.contentPlaceholderRef.createComponent(
            componentFactory
        );

        Object.entries(this.bodyComponentInputs).forEach(
            ([key,value]: [string,any]) => {
                newComponent.instance[key]=value;
            }
        );
    }
}