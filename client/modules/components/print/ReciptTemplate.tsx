"use client";

import React from "react";

type ReceiptProps = {
  receipt: any;
};

export default function Receipt({ receipt }: ReceiptProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white text-black p-8 print:p-4 text-sm">
      {/* HEADER */}
      <div className="flex justify-between items-start border-b pb-4">
        <div>
          <h1 className="text-xl font-bold">Your Company Name</h1>
          <p className="text-xs text-gray-600">Coimbatore, Tamil Nadu, India</p>
          <p className="text-xs text-gray-600">GSTIN: XXXXXXXX</p>
        </div>

        <div className="text-right">
          <h2 className="text-lg font-semibold">RECEIPT</h2>
          <p>Receipt No: {receipt.orderNumber}</p>
          <p>Date: {formatDate(receipt.orderDate)}</p>
          <p>Status: {receipt.status}</p>
        </div>
      </div>

      {/* CUSTOMER */}
      <div className="grid grid-cols-2 gap-6 mt-6 border-b pb-4">
        <div>
          <h3 className="font-semibold mb-1">Billing To</h3>
          <p>{receipt.client.name}</p>
          <p>{receipt.client.phone}</p>
          <p>{receipt.billingAddress}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Shipping To</h3>
          <p>{receipt.shippingAddress}</p>
          <p>{receipt.shippingCity}</p>
          <p>{receipt.shippingPincode}</p>
        </div>
      </div>

      {/* ITEMS */}
      <div className="mt-6">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">#</th>
              <th className="text-left">Item</th>
              <th className="text-left">SKU</th>
              <th className="text-right">Qty</th>
              <th className="text-right">Price</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>

          <tbody>
            {receipt.items.map((item: any, index: number) => (
              <tr key={item.id} className="border-b">
                <td className="py-2">{index + 1}</td>
                <td>{item.product.name}</td>
                <td>{item.product.sku}</td>
                <td className="text-right">{item.quantity}</td>
                <td className="text-right">{formatCurrency(item.unitPrice)}</td>
                <td className="text-right">{formatCurrency(item.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* TOTALS */}
      <div className="flex justify-end mt-6">
        <div className="w-64 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(receipt.subTotal)}</span>
          </div>

          <div className="flex justify-between">
            <span>Discount</span>
            <span>{formatCurrency(receipt.totalDiscount)}</span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>{formatCurrency(receipt.totalTax)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{formatCurrency(receipt.shippingCost)}</span>
          </div>

          <div className="border-t pt-2 flex justify-between font-semibold">
            <span>Grand Total</span>
            <span>{formatCurrency(receipt.grandTotal)}</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-10 border-t pt-4 text-xs text-gray-600">
        <p>Notes: {receipt.notes || "-"}</p>
        <p className="mt-2">Thank you for your business.</p>
      </div>
    </div>
  );
}

/* ---------------- UTILITIES ---------------- */

function formatCurrency(value: string | number) {
  const num = typeof value === "string" ? Number(value) : value;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(num);
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN");
}
