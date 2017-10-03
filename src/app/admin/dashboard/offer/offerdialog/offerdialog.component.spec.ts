import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdialogComponent } from './offerdialog.component';

describe('OfferdialogComponent', () => {
  let component: OfferdialogComponent;
  let fixture: ComponentFixture<OfferdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
