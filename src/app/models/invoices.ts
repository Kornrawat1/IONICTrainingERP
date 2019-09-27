export class Invoices {
    id: number;
    invoiceNo: string;
    invoiceDate: Date;
    customerId: number;
    referenceNo: string;
    paymentTerm: number;
    subtotal: number;
    discount: number;
    vat: number;
    vatAmount: number;
    otherCharges: number;
    grandTotal: number;
    invoiceItems: InvoicesItem[];
}

export class InvoicesItem {
    id: number;
    invoiceId: number;
    productId: number;
    description: string;
    unitPrice: number;
    qty: number;
    discount: number;
    lineTotal: number;
}
