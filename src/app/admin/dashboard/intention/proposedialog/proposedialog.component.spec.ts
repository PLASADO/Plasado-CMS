import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedialogComponent } from './proposedialog.component';

describe('ProposedialogComponent', () => {
  let component: ProposedialogComponent;
  let fixture: ComponentFixture<ProposedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
