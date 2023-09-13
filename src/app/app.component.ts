import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  afuConfig: any={
    multiple: true,
    formatsAllowed: "*",
    maxSize: "1",
    uploadAPI: {
      url: "http://localhost:3000/filesUploaded",
      method: "GET",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        /* "Authorization" : `Bearer ${token}` */
      },
      params: {
        'page': '1'
      },
      responseType: 'blob',
      withCredentials: false,
    },
    downloadAPI: {
      url: "http://localhost:3000/filesUploaded",
      method: "GET",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        /* "Authorization" : `Bearer ${token}` */
      },
      params: {
        'page': '1'
      },
      withCredentials: false,
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
    fileNameIndex: true,
    autoUpload: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  resetVar=false;
  fileSelected(event: any) {
    debugger
  }
  docUpload(event: any) {
    debugger
  }
}
