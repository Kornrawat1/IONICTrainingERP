export class Quotation {
    id: number;
    quotationNo: string;
    quotationDate: Date;
    customerId: number;
    referenceNo: string;
    paymentTerm: number;
    subtotal: number;
    vat: number;
    vatAmount: number;
    otherCharges: number;
    grandTotal: number;
    quotationItems: QuotationItem[];
}

export class QuotationItem {
    id: number;
    quotationId: number;
    productId: number;
    description: string;
    unitPrice: number;
    qty: number;
    discount: number;
    lineTotal: number;
}
