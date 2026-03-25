"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductInput, productSchema, Product } from "../../product/product.schema";
import { useRouter } from "next/navigation";
import { useSuppliers } from "@/modules/hooks/useSupplier";
import { useCategories } from "@/modules/hooks/useCategory";
import Select, { SingleValue } from "react-select";
import { Controller } from "react-hook-form";
interface ProductFormProps {
  initialData?: Product;
  onSubmit: (data: ProductInput) => void;
  isLoading?: boolean;
}

export default function ProductForm({ initialData, onSubmit, isLoading }: ProductFormProps) {
  const router = useRouter();
  const {data:categories,isLoading:categoryLoading,isError:categoryError} = useCategories();
  const {data:suppliers,isLoading:supplierLoading,isError:supplierError} = useSuppliers();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductInput>({
    resolver: zodResolver(productSchema) as any,
    defaultValues: initialData ? {
      name: initialData.name,
      sku: initialData.sku,
      description: initialData.description || "",
      price: initialData.price,
      stockQuantity: initialData.stockQuantity,
      type: initialData.type,
      unit: initialData.unit || "",
      categoryId: initialData.categoryId || "",
      supplierId: initialData.supplierId || "",
      imageUrl: initialData.imageUrl || "",
    } : {
      type: "finished_good"
    },
  });
  const supplierOptions = suppliers?.map((supplier) => ({
    value: supplier.id,
    label: supplier.name,
  })) || [];
  type CategoryOption = {
  value: string;  // or number if your category IDs are numbers
  label: string;
};
type SupplierOption = {
  value: string;  // or number if your category IDs are numbers
  label: string;
};

 const options: CategoryOption[] =
    categories?.map((cat) => ({
      value: cat.id.toString(),
      label: cat.name,
    })) || [];

  return (
    <form
      onSubmit={handleSubmit((data: any) => onSubmit(data))}
      className="w-full space-y-4 rounded-xl bg-gray-800 p-6 shadow text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Product Name *</label>
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">SKU *</label>
          <input
            {...register("sku")}
            placeholder="SKU"
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
          />
          {errors.sku && <p className="text-red-500 text-sm mt-1">{errors.sku.message}</p>}
        </div>

        <div>
           <label className="block text-sm font-medium mb-1">Price *</label>
           <input
            type="number"
            step="0.01"
            {...register("price")}
            placeholder="Price"
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        <div>
           <label className="block text-sm font-medium mb-1">Stock Quantity *</label>
           <input
            type="number"
            {...register("stockQuantity")}
            placeholder="Stock Quantity"
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
          />
          {errors.stockQuantity && <p className="text-red-500 text-sm mt-1">{errors.stockQuantity.message}</p>}
        </div>

        <div>
           <label className="block text-sm font-medium mb-1">Type *</label>
           <select 
             {...register("type")}
             className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
           >
             <option value="raw_material">Raw Material</option>
             <option value="finished_good">Finished Good</option>
             <option value="spare_part">Spare Part</option>
           </select>
           {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Unit</label>
          <input
            {...register("unit")}
            placeholder="e.g. kg, pieces"
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
          />
        </div>
        
       <div>
        <label className="block text-sm font-medium mb-1">Category</label>
         <Controller
        name="categoryId"
        control={control}
        render={({ field }) => {
          // 🔥 Convert string -> option object
          const selectedOption = options.find(
            (opt) => opt.value === field.value
          );

          return (
            <Select
              instanceId="category-select"
              options={options}
              placeholder="Select category..."
              className="text-black"
              value={selectedOption || null} // ✅ FIX HERE
              onChange={(option: SingleValue<CategoryOption>) =>
                field.onChange(option?.value || "")
              }
              onBlur={field.onBlur}
            />
          );
        }}
      />
      </div>

        <div>
          <label className="block text-sm font-medium mb-1">Supplier</label>
          <Controller
        name="supplierId"
        control={control}
        render={({ field }) => {
          // 🔥 Convert string -> option object
          const selectedOption = supplierOptions.find(
            (opt) => opt.value === field.value
          );

          return (
            <Select
              instanceId="supplier-select" 
              options={supplierOptions}
              placeholder="Select supplier..."
              className="text-black"
              value={selectedOption || null} // ✅ FIX HERE
              onChange={(option: SingleValue<SupplierOption>) =>
                field.onChange(option?.value || "")
              }
              onBlur={field.onBlur}
            />
          );
        }}
      />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          {...register("description")}
          placeholder="Description"
          rows={3}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4 border-t border-gray-600">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 disabled:opacity-50"
        >
          {isLoading ? "Saving..." : initialData ? "Update Product" : "Create Product"}
        </button>
      </div>
    </form>
  );
}
