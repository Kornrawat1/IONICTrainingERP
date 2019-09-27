import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationCreatePage } from './quotation-create.page';

describe('QuotationCreatePage', () => {
  let component: QuotationCreatePage;
  let fixture: ComponentFixture<QuotationCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
