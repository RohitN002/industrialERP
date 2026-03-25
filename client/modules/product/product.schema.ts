import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  sku: z.string().min(1, "SKU is required"),
  description: z.string().optional(),
  price: z.coerce.number().min(0, "Price must be at least 0"),
  stockQuantity: z.coerce.number().min(0, "Stock Quantity must be at least 0"),
  type: z.enum(['raw_material', 'finished_good', 'spare_part']),
  unit: z.string().optional(),
  categoryId: z.string().optional(),
  supplierId: z.string().optional(),
  imageUrl: z.string().optional(),
});

export type ProductInput = z.infer<typeof productSchema>;

export type Product = ProductInput & {
  id: string;
  createdAt: string;
};
export type ProductResponse = Product & {
  message: string;
  data: Product[];
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

export const supplierSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  pincode: z.string().min(1, "Pincode is required"),
  country: z.string().min(1, "Country is required"),
  contactPerson: z.string().min(1, "Contact Person is required"),
  contactPersonPhone: z.string().min(1, "Contact Person Phone is required"),
  gst: z.string().min(1, "GST is required"),
});

export type SupplierInput = z.infer<typeof supplierSchema>;

export type Supplier = SupplierInput & {
  id: string;
  createdAt: string;
};
