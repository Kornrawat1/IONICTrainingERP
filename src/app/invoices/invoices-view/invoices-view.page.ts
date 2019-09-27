import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InvoicesService } from 'src/app/services/invoices.service';
import { Invoices, InvoicesItem } from 'src/app/models/invoices';

@Component({
  selector: 'app-invoices-view',
  templateUrl: './invoices-view.page.html',
  styleUrls: ['./invoices-view.page.scss'],
})
export class InvoicesViewPage implements OnInit {
  private id:any;
  invoiceNo :any;
  invoiceDate :any;
  subTotal :any;
  discount :any;
  vat :any;
  grandTotal :any;
  invoiceitems :InvoicesItem[];
  constructor(public Router:Router,private activatedRoute: ActivatedRoute,private invoicesService: InvoicesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap
     .subscribe((queryParams: ParamMap) => {
        this.id = queryParams.get('id');
        this.ShowData(this.id);
    });
  }

  ShowData(id){
    console.log(id)
    this.invoicesService.getInvoicesById(id).subscribe(data => {
      this.invoiceNo = data.invoiceNo;
      this.invoiceDate = data.invoiceDate;
      this.subTotal = data.subtotal;
      this.discount = data.discount;
      this.vat = data.vat;
      this.grandTotal = data.grandTotal;
      this.invoiceitems = data.invoiceItems;
      this.id = id;
    console.log(data)

    });
  }

  edit(id: String) {
    console.log(id)
    // this.router.navigate(['/app/invoices/view', invno]);
    this.Router.navigate(['/app/invoices/create', { 'id': id} ]);
    
  }

}
