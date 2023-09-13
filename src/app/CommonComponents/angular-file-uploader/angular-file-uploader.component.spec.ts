import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFileUploaderComponent } from './angular-file-uploader.component';

describe('AngularFileUploaderComponent', () => {
  let component: AngularFileUploaderComponent;
  let fixture: ComponentFixture<AngularFileUploaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularFileUploaderComponent]
    });
    fixture = TestBed.createComponent(AngularFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
