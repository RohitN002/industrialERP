import z from "zod";

export const quoteSchema = z.object({
  clientId: z.string().optional(),
  expiryDate: z.coerce
    .date()
    .min(new Date(), "Expiry date must be in the future"),
  quoteName: z.string().min(1, "Quote name is required"),
  currency: z.string().min(1, "Currency is required"),
  notes: z.string().optional(),
  terms: z.string().optional(),
  items: z
    .array(
      z.object({
        productId: z.string().min(1, "Product is required"),
        quantity: z.number().min(1, "Quantity is required"),
        unitPrice: z.number().min(1, "Unit price is required"),
        description: z.string().optional(),
      }),
    )
    .min(1, "Items are required"),
});

export type QuoteSchemaType = z.infer<typeof quoteSchema>;

export type QuoteItemSchemaType = z.infer<typeof quoteSchema>["items"][0];

export type Quote = {
  id: string;
  referenceNo: string;
  quoteName: string;
  clientId?: string;
  client: string;
  expiryDate: string;
  currency: string;
  notes?: string;
  terms?: string;
  items: any[];
  createdAt: string;
  updatedAt: string;
};
export type QuoteResponse = {
  message: string;
  data: Quote[];
};
