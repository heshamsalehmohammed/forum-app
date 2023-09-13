import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    template: `hesham hamada`
})
export class PopupContent implements OnInit {
    
    constructor(public ref: DynamicDialogRef) {}

    ngOnInit() {
    }
}