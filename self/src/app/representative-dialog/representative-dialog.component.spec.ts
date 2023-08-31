import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentativeDialogComponent } from './representative-dialog.component';

describe('RepresentativeDialogComponent', () => {
  let component: RepresentativeDialogComponent;
  let fixture: ComponentFixture<RepresentativeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepresentativeDialogComponent]
    });
    fixture = TestBed.createComponent(RepresentativeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
