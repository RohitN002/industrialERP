import { z } from "zod";
import { productSchema } from "../product/product.schema";

export const productionItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  quantity: z.coerce.number().min(1, "Quantity must be at least 1"),
});

export const productionSchema = z.object({
  batchNo: z.string().min(1, "Batch No is required"),
  status: z.enum(['PLANNED', 'IN_PROGRESS', 'COMPLETED', 'REJECTED']).default('PLANNED'),
  producedProductId: z.string().min(1, "Produced Product must be selected"),
  items: z.array(productionItemSchema).min(1, "At least one raw material is required"),
});

export type ProductionItemInput = z.infer<typeof productionItemSchema>;
export type ProductionInput = z.infer<typeof productionSchema>;

export type ProductionItem = ProductionItemInput & {
  id: string;
  productionId: string;
  product?: any;
};

export type Production = ProductionInput & {
  id: string;
  createdById: string;
  createdAt: string;
  producedProduct?: any;
  items: ProductionItem[];
  createdBy?: any;
};
