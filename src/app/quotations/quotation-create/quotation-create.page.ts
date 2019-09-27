import { FormBuilder, FormGroup, Validators, ValidatorFn, FormArray, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation-create',
  templateUrl: './quotation-create.page.html',
  styleUrls: ['./quotation-create.page.scss'],
})
export class QuotationCreatePage implements OnInit {

  quotationForm: FormGroup;
  products: object = [{productId: 1, productName: 'prod-1'}, {productId: 2, productName: 'prod-2'}];
 

  // Property
  get quotationLines(): FormArray {
    return this.quotationForm.get('quotationItems') as FormArray;
  }

  constructor(private fb: FormBuilder,
    private router: Router
    ) { 
    
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.quotationForm = this.fb.group({
      quotationNo: ['', Validators.required],
      quotationDate: ['', Validators.required],
      customer: ['', Validators.required],
      expireDate: ['', Validators.required],
      paymentTerm: '0',
      referenceNo: '',
      pic: '',
      subtotal: [0, Validators.required],
      otherCharges: [0, Validators.required],
      vat: [0, Validators.required],
      grandTotal: [0, Validators.required],
      quotationItems: this.fb.array([this.createQuotationItems()])

    });
  }
  createQuotationItems(): FormGroup {
    return this.fb.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      qty: [0, Validators.required],
      unitPrice: [0, Validators.required],
      discount: [0, Validators.required],
      lineTotal: [0, Validators.required]
    });
  }

  addItem() {
    this.quotationLines.push(this.createQuotationItems());
  }
  removeItem(i: number) {
    this.quotationLines.removeAt(i);
  }

  GetProductInfo(ctrl: HTMLInputElement, quotationLine) {

  }

  calculateLineTotal(line: AbstractControl) {
  var qty = line.get('qty');
  var unitPrice = line.get('unitPrice');
  var discount = line.get('discount');
   var total  = (parseFloat(unitPrice.value)*parseFloat(qty.value))-parseFloat(discount.value);
  line.get('lineTotal').setValue(total);
    console.log(qty)
  }

  submit(registerForm: FormGroup) {
    if (registerForm.valid) {
    this.router.navigateByUrl('/app/quotations/view');
    }
  }
}
