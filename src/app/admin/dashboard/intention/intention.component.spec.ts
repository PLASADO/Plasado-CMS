import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentionComponent } from './intention.component';

describe('IntentionComponent', () => {
  let component: IntentionComponent;
  let fixture: ComponentFixture<IntentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
