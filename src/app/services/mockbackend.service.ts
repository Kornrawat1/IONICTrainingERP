import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockBackendService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const products = [
      {
        id: 1,
        productCode: 'prod-1',
        productName: 'Product 1',
        unitPrice: 120.50,
        unit: 'pcs'
      },
      {
        id: 2,
        productCode: 'prod-2',
        productName: 'Product 2',
        unitPrice: 75.0,
        unit: 'pcs'
      },
      {
        id: 3,
        productCode: 'prod-3',
        productName: 'Product 3',
        unitPrice: 120.50,
        unit: 'pcs'
      },
      {
        id: 4,
        productCode: 'prod-4',
        productName: 'Product 4',
        unitPrice: 86,
        unit: 'pcs'
      },
      {
        id: 5,
        productCode: 'prod-5',
        productName: 'Product 5',
        unitPrice: 111
      },
    ];

    const quotations = [
      {
        id: 1,
        quotationNo: 'QUO1909001',
        quotationDate: '2019-09-12',
        customerId: 1,
        remark: null,
        subtotal: 0,
        vat: 0,
        discount: 0,
        grandTotal: 27000,
        quotationItems: [
          {
            id: 1,
            quotationId: 1,
            lineNo: 1,
            itemId: 1,
            description: 'Product 1',
            qty: 100,
            uom: 'pcs',
            unitPrice: 100,
            discount: 0,
            vatId: 7,
            lineTotal: 10000
          },
          {
            id: 2,
            quotationId: 1,
            lineNo: 2,
            itemId: 2,
            description: 'Product 2',
            qty: 120,
            uom: 'pcs',
            unitPrice: 70,
            discount: 0,
            vatId: 7,
            lineTotal: 8400
          }
        ]
      },
      {
        id: 2,
        quotationNo: 'QUO1909002',
        quotationDate: '2019-09-15',
        customerId: 1,
        remark: null,
        subtotal: 0,
        vat: 0,
        discount: 0,
        grandTotal: 12000,
        quotationItems: [
          {
            id: 1,
            quotationId: 1,
            lineNo: 1,
            itemId: 3,
            description: 'Product 3',
            qty: 100,
            uom: 'pcs',
            unitPrice: 100,
            discount: 0,
            vatId: 7,
            lineTotal: 10000
          },
          {
            id: 2,
            quotationId: 1,
            lineNo: 2,
            itemId: 2,
            description: 'Product 2',
            qty: 120,
            uom: 'pcs',
            unitPrice: 70,
            discount: 0,
            vatId: 7,
            lineTotal: 8400
          }
        ]
      }
    ];
    const invoices = [
      {
        id: 1,
        invoiceNo: 'INV1909001',
        invoiceDate: '2019-09-12',
        customerId: 1,
        remark: null,
        subtotal: 0,
        vat: 0,
        discount: 0,
        grandTotal: 27000,
        invoiceItems: [
          {
            id: 1,
            invoiceId: 1,
            lineNo: 1,
            itemId: 1,
            description: 'Product 1',
            qty: 100,
            uom: 'pcs',
            unitPrice: 100,
            discount: 0,
            vatId: 7,
            lineTotal: 10000
          },
          {
            id: 2,
            invoiceId: 1,
            lineNo: 2,
            itemId: 2,
            description: 'Product 2',
            qty: 120,
            uom: 'pcs',
            unitPrice: 70,
            discount: 0,
            vatId: 7,
            lineTotal: 8400
          }
        ]
      },
      {
        id: 2,
        invoiceNo: 'INV1909002',
        invoiceDate: '2019-09-15',
        customerId: 1,
        remark: null,
        subtotal: 0,
        vat: 0,
        discount: 0,
        grandTotal: 12000,
        invoiceItems: [
          {
            id: 1,
            invoiceId: 1,
            lineNo: 1,
            itemId: 3,
            description: 'Product 3',
            qty: 100,
            uom: 'pcs',
            unitPrice: 100,
            discount: 0,
            vatId: 7,
            lineTotal: 10000
          },
          {
            id: 2,
            invoiceId: 1,
            lineNo: 2,
            itemId: 2,
            description: 'Product 2',
            qty: 120,
            uom: 'pcs',
            unitPrice: 70,
            discount: 0,
            vatId: 7,
            lineTotal: 8400
          }
        ]
      }
    ];

    return {
      quotations, products, invoices
    };
  }
}
