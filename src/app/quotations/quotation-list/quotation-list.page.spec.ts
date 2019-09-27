import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationListPage } from './quotation-list.page';

describe('QuotationListPage', () => {
  let component: QuotationListPage;
  let fixture: ComponentFixture<QuotationListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
