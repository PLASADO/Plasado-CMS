import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorycreatedialogComponent } from './categorycreatedialog.component';

describe('CategorycreatedialogComponent', () => {
  let component: CategorycreatedialogComponent;
  let fixture: ComponentFixture<CategorycreatedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorycreatedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorycreatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
