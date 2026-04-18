import ReceiptTemplate from "@/modules/components/print/ReciptTemplate";

export default function print() {
  const receipt = {
    orderNumber: "ORD-2026-8842",
    orderDate: "March 30, 2026",
    status: "Pending",
    client: {
      name: "Alex Rivers",
      phone: "+1 (555) 123-4567",
    },
    billingAddress: "123 Pine Street, Seattle, WA 98101",
    shippingAddress: "123 Pine Street, Seattle, WA 98101",
    shippingCity: "Seattle",
    shippingPincode: "98101",
    items: [
      {
        id: 1,
        product: {
          name: "Mechanical Keyboard",
          sku: "MK-001",
        },
        quantity: 1,
        unitPrice: 120.0,
        total: 120.0,
      },
      {
        id: 2,
        product: {
          name: "USB-C Cable (Braided)",
          sku: "UC-002",
        },
        quantity: 2,
        unitPrice: 15.0,
        total: 30.0,
      },
      {
        id: 3,
        product: {
          name: "Wireless Mouse",
          sku: "WM-003",
        },
        quantity: 1,
        unitPrice: 45.0,
        total: 45.0,
      },
    ],
    subTotal: 195.0,
    totalDiscount: 0,
    totalTax: 15.6,
    shippingCost: 10.0,
    grandTotal: 220.6,
    notes: "Thank you for your business.",
  };

  return <div>{/* <ReceiptTemplate receipt={receipt} /> */}</div>;
}
