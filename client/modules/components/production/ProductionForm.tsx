"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProductionInput,
  productionSchema,
  Production,
} from "../../production/production.schema";
import { useProducts } from "../../../lib/store/useProduct";
import { useRouter } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";

interface ProductionFormProps {
  initialData?: Production;
  onSubmit: (data: ProductionInput) => void;
  isLoading?: boolean;
}

export default function ProductionForm({
  initialData,
  onSubmit,
  isLoading,
}: ProductionFormProps) {
  const router = useRouter();
  const { data: products } = useProducts();

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductionInput>({
    resolver: zodResolver(productionSchema) as any,
    defaultValues: initialData
      ? {
          batchNo: initialData.batchNo,
          status: initialData.status,
          producedProductId: initialData.producedProductId,
          items: initialData.items.map((i) => ({
            productId: i.productId,
            quantity: i.quantity,
          })),
        }
      : {
          status: "PLANNED",
          items: [{ productId: "", quantity: 1 }],
        },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const finishedGoods =
    products?.filter((p) => p.type === "finished_good") || [];

  // ─── Shared style tokens ───────────────────────────────────────────
  const inputClass =
    "w-full border border-(--border) bg-(--surface-2) text-(--text-primary) p-2 rounded placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)]";
  const labelClass = "block text-(--text-primary) text-sm font-semibold mb-1";
  const errorClass = "text-(--error) text-sm mt-1";

  return (
    <form
      onSubmit={handleSubmit((data: any) => onSubmit(data))}
      className="w-full space-y-6 rounded-xl bg-(--surface) p-6 shadow"
    >
      {/* ── Batch Details ───────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Batch Number *</label>
          <input
            {...register("batchNo")}
            placeholder="e.g. BATCH-001"
            className={inputClass}
          />
          {errors.batchNo && (
            <p className={errorClass}>{errors.batchNo.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Status *</label>
          <select {...register("status")} className={inputClass}>
            <option value="PLANNED">Planned</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
            <option value="REJECTED">Rejected</option>
          </select>
          {errors.status && (
            <p className={errorClass}>{errors.status.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>
            Produced Product * (Finished Good)
          </label>
          <select
            {...register("producedProductId")}
            className={inputClass}
          >
            <option value="">-- Select Product --</option>
            {finishedGoods.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.sku})
              </option>
            ))}
          </select>
          {errors.producedProductId && (
            <p className={errorClass}>{errors.producedProductId.message}</p>
          )}
        </div>
      </div>

      {/* ── Raw Materials ───────────────────────────────────── */}
      <div className="border border-(--border) rounded-lg p-4 bg-(--surface-3)">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-(--text-primary) font-semibold text-base">
            Raw Materials Used
          </h3>
          <button
            type="button"
            onClick={() => append({ productId: "", quantity: 1 })}
            className="flex items-center gap-1 text-sm px-3 py-1.5 rounded font-medium bg-(--btn-primary) text-(--btn-text-white) hover:bg-(--btn-primary-hover) transition-colors cursor-pointer"
          >
            <Plus size={14} /> Add Material
          </button>
        </div>

        <div className="space-y-3">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col md:flex-row gap-3 items-start"
            >
              <div className="flex-1">
                <select
                  {...register(`items.${index}.productId` as const)}
                  className={inputClass}
                >
                  <option value="">-- Select Material --</option>
                  {products?.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.sku}) - {p.stockQuantity} in stock
                    </option>
                  ))}
                </select>
                {errors.items?.[index]?.productId && (
                  <p className={errorClass}>
                    {errors.items[index]?.productId?.message}
                  </p>
                )}
              </div>

              <div className="w-full md:w-32">
                <input
                  type="number"
                  {...register(`items.${index}.quantity` as const)}
                  placeholder="Qty"
                  className={inputClass}
                />
                {errors.items?.[index]?.quantity && (
                  <p className={errorClass}>
                    {errors.items[index]?.quantity?.message}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => remove(index)}
                className="mt-1 p-2 rounded text-(--error) hover:bg-(--error-bg) transition-colors cursor-pointer disabled:opacity-40"
                disabled={fields.length === 1}
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {errors.items && !Array.isArray(errors.items) && (
          <p className={`${errorClass} mt-2`}>{errors.items.message}</p>
        )}
      </div>

      {/* ── Actions ─────────────────────────────────────────── */}
      <div className="flex justify-end space-x-2 pt-2 border-t border-(--border)">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 rounded font-medium text-sm border border-(--border) bg-(--btn-secondary) text-(--btn-secondary-text) hover:opacity-80 transition-opacity cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 rounded font-medium text-sm bg-(--btn-primary) text-(--btn-text-white) hover:bg-(--btn-primary-hover) disabled:opacity-50 transition-colors cursor-pointer"
        >
          {isLoading
            ? "Saving..."
            : initialData
              ? "Update Production"
              : "Create Production"}
        </button>
      </div>
    </form>
  );
}
