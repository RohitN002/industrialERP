import z from "zod";

export const OrderSchema = z.object({
  clientId: z.string().min(1, "Client  is required"),
  orderNumber: z.string().min(1, "Order number is required"),
  orderDate: z.coerce.date().min(1, "Order date is required"),
  expectedDeliveryDate: z.coerce
    .date()
    .min(1, "Expected delivery date is required"),
  status: z.string().min(1, "Status is required"),
  priority: z.string().min(1, "Priority is required"),
  items: z.array(
    z.object({
      productId: z.string().min(1, "Product is required"),
      quantity: z.number().min(1, "Quantity is required"),
      unitPrice: z.number().min(1, "Unit price is required"),
    }),
  ),
  shippingAddress: z.string().min(1, "Shipping address is required"),
  shippingCity: z.string().min(1, "Shipping date is required"),
  shippingState: z.string().min(1, "Shipping date is required"),
  shippingPincode: z.string().min(1, "Shipping date is required"),
  shippingCountry: z.string().min(1, "Shipping date is required"),
  shippingContact: z.string().min(1, "Shipping contact is required"),
  shippingPhone: z.string().optional(),
  billingAddress: z.string().min(1, "Billing address is required"),
  shippingMethod: z.string().min(1, "Shipping method is required"),
  paymentMethod: z.string().min(1, "Payment method is required"),
  grandTotal: z.number().min(1, "Grand total is required"),
  paymentStatus: z.string().min(1, "Payment status is required"),
  notes: z.string().min(1, "Notes is required"),
  subTotal: z.number().min(1, "Subtotal is required"),
  totalTax: z.number().min(1, "Total tax is required"),
  totalAmount: z.number().min(1, "Total amount is required"),
  totalDiscount: z.number().min(1, "Total discount is required"),
  shippingCost: z.number().min(1, "Shipping cost is required"),

  currency: z.string().min(1, "Currency is required"),
});

export type OrderSchemaType = z.infer<typeof OrderSchema>;

export type Order = {
  _id: string;
  customerId: string;
  orderNumber: string;
  orderDate: string;
  expectedDeliveryDate: string;
  status: string;
  priority: string;
  items: {
    productId: string;
    quantity: number;
    unitPrice: number;
  }[];
  grandTotal: number;
  shippingPhone: string;
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingPincode: string;
  shippingCountry: string;
  shippingContact: string;
  billingAddress: string;
  shippingMethod: string;
  paymentMethod: string;
  paymentStatus: string;
  notes: string;
  subtotal: number;
  totalTax: number;
  totalAmount: number;
  totalDiscount: number;
  shippingCost: number;
  currency: string;
};

export type OrderResponse = {
  message: string;
  data: Order[];
};
