import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesListPage } from './invoices-list.page';

describe('InvoicesListPage', () => {
  let component: InvoicesListPage;
  let fixture: ComponentFixture<InvoicesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
