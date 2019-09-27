import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesCreatePage } from './invoices-create.page';

describe('InvoicesCreatePage', () => {
  let component: InvoicesCreatePage;
  let fixture: ComponentFixture<InvoicesCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
