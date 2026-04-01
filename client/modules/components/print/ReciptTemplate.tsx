"use client";

type InvoiceProps = {
  invoice: any;
};

export default function GSTInvoice() {
  const invoice = {
    id: "inv_2026_0001",
    invoiceNumber: "INV-2026-0001",
    invoiceDate: "2026-03-29T07:28:47.721Z",
    placeOfSupply: "Tamil Nadu",
    currency: "INR",
    status: "ISSUED",

    company: {
      name: "Your Company Pvt Ltd",
      gstin: "33ABCDE1234F1Z5",
      address: "Coimbatore, Tamil Nadu, India",
      state: "Tamil Nadu",
      stateCode: "33",
    },

    customer: {
      name: "ROHIT N",
      gstin: "33AAACR5055K1ZP",
      address: "Naickenpalayam Post, Coimbatore",
      state: "Tamil Nadu",
      stateCode: "33",
      phone: "07010302030",
    },

    shipping: {
      address: "Naickenpalayam Post",
      city: "Coimbatore",
      state: "Tamil Nadu",
      pincode: "641020",
      country: "India",
    },

    items: [
      {
        id: "item_1",
        name: "No 2 Prod",
        sku: "strye4",
        hsn: "7208",
        quantity: 1,
        unit: "NOS",

        rate: 451200,
        taxable: 451200,

        gstRate: 18,

        cgst: 40608,
        sgst: 40608,
        igst: 0,

        total: 532416,
      },
    ],

    summary: {
      taxable: 451200,
      cgst: 40608,
      sgst: 40608,
      igst: 0,
      totalTax: 81216,
      grandTotal: 532416,
      total: 532416,
    },

    amountInWords:
      "Five Lakh Thirty Two Thousand Four Hundred Sixteen Rupees Only",

    payment: {
      status: "UNPAID",
      method: null,
      dueDate: "2026-04-15",
      terms: "Net 15",
    },

    bankDetails: {
      accountName: "Your Company Pvt Ltd",
      accountNumber: "XXXXXXX1234",
      ifsc: "HDFC0001234",
      bankName: "HDFC Bank",
      upiId: "yourcompany@upi",
    },

    meta: {
      notes: "Goods once sold will not be taken back.",
      terms: "Subject to Coimbatore jurisdiction.",
      isReverseCharge: false,
    },

    audit: {
      version: 1,
      createdAt: "2026-03-29T07:28:47.721Z",
      updatedAt: "2026-03-29T07:28:47.721Z",
      createdBy: "user_123",
      immutable: true,
    },
  };
  return (
    <div className="max-w-5xl mx-auto bg-white text-black p-8 text-xs print:p-4">
      {/* HEADER */}
      <div className="border-b pb-4 flex justify-between">
        <div>
          <h1 className="text-lg font-bold">{invoice.company.name}</h1>
          <p>{invoice.company.address}</p>
          <p>GSTIN: {invoice.company.gstin}</p>
        </div>

        <div className="text-right">
          <h2 className="text-lg font-semibold">TAX INVOICE</h2>
          <p>Invoice No: {invoice.invoiceNumber}</p>
          <p>Date: {formatDate(invoice.invoiceDate)}</p>
          <p>Place of Supply: {invoice.placeOfSupply}</p>
        </div>
      </div>

      {/* CUSTOMER */}
      <div className="grid grid-cols-2 gap-6 mt-4 border-b pb-4">
        <div>
          <h3 className="font-semibold">Bill To</h3>
          <p>{invoice.customer.name}</p>
          <p>{invoice.customer.address}</p>
          <p>GSTIN: {invoice.customer.gstin || "-"}</p>
        </div>

        <div>
          <h3 className="font-semibold">Ship To</h3>
          <p>{invoice.shipping.address}</p>
          <p>{invoice.shipping.state}</p>
        </div>
      </div>

      {/* ITEMS TABLE */}
      <table className="w-full mt-4 border text-xs">
        <thead>
          <tr className="bg-gray-100 border">
            <th className="p-2">#</th>
            <th>Description</th>
            <th>HSN/SAC</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Taxable</th>
            <th>CGST</th>
            <th>SGST</th>
            <th>IGST</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {invoice.items.map((item: any, i: number) => (
            <tr key={i} className="border">
              <td className="p-2">{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.hsn}</td>
              <td className="text-right">{item.quantity}</td>
              <td className="text-right">{formatCurrency(item.rate)}</td>
              <td className="text-right">{formatCurrency(item.taxable)}</td>
              <td className="text-right">{formatCurrency(item.cgst)}</td>
              <td className="text-right">{formatCurrency(item.sgst)}</td>
              <td className="text-right">{formatCurrency(item.igst)}</td>
              <td className="text-right font-medium">
                {formatCurrency(item.total)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* TAX SUMMARY */}
      <div className="flex justify-end mt-4">
        <div className="w-80 space-y-1">
          <div className="flex justify-between">
            <span>Taxable Amount</span>
            <span>{formatCurrency(invoice.summary.taxable)}</span>
          </div>

          <div className="flex justify-between">
            <span>CGST</span>
            <span>{formatCurrency(invoice.summary.cgst)}</span>
          </div>

          <div className="flex justify-between">
            <span>SGST</span>
            <span>{formatCurrency(invoice.summary.sgst)}</span>
          </div>

          <div className="flex justify-between">
            <span>IGST</span>
            <span>{formatCurrency(invoice.summary.igst)}</span>
          </div>

          <div className="border-t pt-2 flex justify-between font-bold">
            <span>Grand Total</span>
            <span>{formatCurrency(invoice.summary?.total)}</span>
          </div>
        </div>
      </div>

      {/* AMOUNT IN WORDS */}
      <div className="mt-4">
        <p className="text-xs">Amount in Words: {invoice.amountInWords}</p>
      </div>

      {/* FOOTER */}
      <div className="mt-8 grid grid-cols-2 text-xs">
        <div>
          <p>Terms & Conditions:</p>
          <p>{invoice.meta?.terms || "Standard terms apply."}</p>
        </div>

        <div className="text-right">
          <p>For {invoice.company.name}</p>
          <div className="h-16" />
          <p>Authorized Signatory</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- UTILS ---------- */

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value / 100); // assuming paise
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN");
}
