import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationViewPage } from './quotation-view.page';

describe('QuotationViewPage', () => {
  let component: QuotationViewPage;
  let fixture: ComponentFixture<QuotationViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
