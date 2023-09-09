import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {PopupContent} from './popupContent';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  constructor(public dialogService: DialogService) {}

  ref: DynamicDialogRef | undefined;

  show() {
      this.ref = this.dialogService.open(PopupContent, {
          header: 'popup header',
          width: '70%',
          contentStyle: { overflow: 'auto' },
          baseZIndex: 10000,
          maximizable: false
      });
  }

  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  }
}
