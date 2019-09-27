import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesViewPage } from './invoices-view.page';

describe('QuotationViewPage', () => {
  let component: InvoicesViewPage;
  let fixture: ComponentFixture<InvoicesViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
