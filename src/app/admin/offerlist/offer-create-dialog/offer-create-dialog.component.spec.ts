import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCreateDialogComponent } from './offer-create-dialog.component';

describe('OfferCreateDialogComponent', () => {
  let component: OfferCreateDialogComponent;
  let fixture: ComponentFixture<OfferCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
