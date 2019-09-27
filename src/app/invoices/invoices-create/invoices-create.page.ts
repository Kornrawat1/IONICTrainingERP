import { FormBuilder, FormGroup, Validators, ValidatorFn, FormArray, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices-create',
  templateUrl: './invoices-create.page.html',
  styleUrls: ['./invoices-create.page.scss'],
})
export class InvoicesCreatePage implements OnInit {

  invoicesForm: FormGroup;
  products: object = [{productId: 1, productName: 'prod-1'}, {productId: 2, productName: 'prod-2'}];
 

  // Property
  get invoicesLines(): FormArray {
    return this.invoicesForm.get('invoicesItems') as FormArray;
  }

  constructor(private fb: FormBuilder,
    private router: Router
    ) { 
    
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.invoicesForm = this.fb.group({
      invoicesNo: ['', Validators.required],
      invoicesDate: ['', Validators.required],
      customer: ['', Validators.required],
      expireDate: ['', Validators.required],
      paymentTerm: '0',
      referenceNo: '',
      pic: '',
      subtotal: [0, Validators.required],
      otherCharges: [0, Validators.required],
      vat: [0, Validators.required],
      grandTotal: [0, Validators.required],
      invoicesItems: this.fb.array([this.createInvoicesItems()])

    });
  }
  createInvoicesItems(): FormGroup {
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
    this.invoicesLines.push(this.createInvoicesItems());
  }
  removeItem(i: number) {
    this.invoicesLines.removeAt(i);
  }

  GetProductInfo(ctrl: HTMLInputElement, invoicesLine) {

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
    this.router.navigateByUrl('/app/invoices/view');
    }
  }
}
