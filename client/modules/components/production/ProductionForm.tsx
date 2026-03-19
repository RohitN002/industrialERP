"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductionInput, productionSchema, Production } from "../../production/production.schema";
import { useProducts } from "../../hooks/useProduct";
import { useRouter } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";

interface ProductionFormProps {
  initialData?: Production;
  onSubmit: (data: ProductionInput) => void;
  isLoading?: boolean;
}

export default function ProductionForm({ initialData, onSubmit, isLoading }: ProductionFormProps) {
  const router = useRouter();
  const { data: products } = useProducts();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductionInput>({
    resolver: zodResolver(productionSchema) as any,
    defaultValues: initialData ? {
      batchNo: initialData.batchNo,
      status: initialData.status,
      producedProductId: initialData.producedProductId,
      items: initialData.items.map(i => ({ productId: i.productId, quantity: i.quantity })),
    } : {
      status: 'PLANNED',
      items: [{ productId: "", quantity: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  // Split products by type if useful, or just show all
  const finishedGoods = products?.filter(p => p.type === 'finished_good') || [];

  return (
    <form
      onSubmit={handleSubmit((data: any) => onSubmit(data))}
      className="w-full space-y-6 rounded-xl bg-gray-800 p-6 shadow text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Batch Number *</label>
          <input
            {...register("batchNo")}
            placeholder="e.g. BATCH-001"
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
          />
          {errors.batchNo && <p className="text-red-500 text-sm mt-1">{errors.batchNo.message}</p>}
        </div>

        <div>
           <label className="block text-sm font-medium mb-1">Status *</label>
           <select 
             {...register("status")}
             className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
           >
             <option value="PLANNED">Planned</option>
             <option value="IN_PROGRESS">In Progress</option>
             <option value="COMPLETED">Completed</option>
             <option value="REJECTED">Rejected</option>
           </select>
           {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
        </div>

        <div className="md:col-span-2">
           <label className="block text-sm font-medium mb-1">Produced Product * (Finished Good)</label>
           <select 
             {...register("producedProductId")}
             className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
           >
             <option value="">-- Select Product --</option>
             {finishedGoods.map(p => (
               <option key={p.id} value={p.id}>{p.name} ({p.sku})</option>
             ))}
           </select>
           {errors.producedProductId && <p className="text-red-500 text-sm mt-1">{errors.producedProductId.message}</p>}
        </div>
      </div>

      <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Raw Materials Used</h3>
          <button
            type="button"
            onClick={() => append({ productId: "", quantity: 1 })}
            className="flex items-center gap-1 text-sm bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded"
          >
            <Plus size={14} /> Add Material
          </button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col md:flex-row gap-3 mb-3 items-start">
            <div className="flex-1">
              <select
                {...register(`items.${index}.productId` as const)}
                className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
              >
                <option value="">-- Select Material --</option>
                {products?.map(p => (
                  <option key={p.id} value={p.id}>{p.name} ({p.sku}) - {p.stockQuantity} in stock</option>
                ))}
              </select>
              {errors.items?.[index]?.productId && (
                <p className="text-red-500 text-sm mt-1">{errors.items[index]?.productId?.message}</p>
              )}
            </div>
            <div className="w-full md:w-32">
              <input
                type="number"
                {...register(`items.${index}.quantity` as const)}
                placeholder="Qty"
                className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
              />
              {errors.items?.[index]?.quantity && (
                <p className="text-red-500 text-sm mt-1">{errors.items[index]?.quantity?.message}</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => remove(index)}
              className="mt-1 p-2 text-red-500 hover:bg-red-500/10 rounded transition-colors"
              disabled={fields.length === 1}
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
        {errors.items && !Array.isArray(errors.items) && (
          <p className="text-red-500 text-sm mt-1">{errors.items.message}</p>
        )}
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
          {isLoading ? "Saving..." : initialData ? "Update Production" : "Create Production"}
        </button>
      </div>
    </form>
  );
}
