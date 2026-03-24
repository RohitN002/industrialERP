import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  sku: z.string().min(1, "SKU is required"),
  description: z.string().optional(),
  price: z.coerce.number().min(0, "Price must be at least 0"),
  stockQuantity: z.coerce.number().min(0, "Stock Quantity must be at least 0"),
  type: z.enum(['raw_material', 'finished_good', 'spare_part']),
  unit: z.string().optional(),
  category: z.string().optional(),
  supplier: z.string().optional(),
  imageUrl: z.string().optional(),
});

export type ProductInput = z.infer<typeof productSchema>;

export type Product = ProductInput & {
  id: string;
  createdAt: string;
};

export const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

export type CategoryInput = z.infer<typeof categorySchema>;

export type Category = CategoryInput & {
  id: string;
  createdAt: string;
};
