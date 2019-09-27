import { Invoices } from './../../models/invoices';
import { InvoicesService } from '../../services/invoices.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.page.html',
  styleUrls: ['./invoices-list.page.scss'],
})
export class InvoicesListPage implements OnInit {

  invoicesList: Invoices[];
  constructor(private invoicesService: InvoicesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.invoicesService.getInvoices().subscribe(data => {
      this.invoicesList = data;
    });
  }
  ShowDetail(id: String) {
      console.log(id)
      // this.router.navigate(['/app/invoices/view', invno]);
      this.router.navigate(['/app/invoices/view', { 'id': id} ]);
      
    }
}
