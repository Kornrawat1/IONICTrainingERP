import { QuotationsService } from './../../services/quotations.service';
import { Component, OnInit } from '@angular/core';
import { Quotation } from 'src/app/models/quotation';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.page.html',
  styleUrls: ['./quotation-list.page.scss'],
})
export class QuotationListPage implements OnInit {

  quotationList: Quotation[];
  constructor(private quotationService: QuotationsService) { }

  ngOnInit() {
    this.quotationService.getQuotations().subscribe(data => {
      console.log(data);
      this.quotationList = data;
    });
  }

}
