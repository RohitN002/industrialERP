"use client";
import {
  SupplierInput,
  supplierSchema,
} from "@/modules/product/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SupplierForm({
  initialData,
  onSubmit,
  isLoading,
}: {
  initialData?: any;
  onSubmit: (data: any) => void;
  isLoading: boolean;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SupplierInput>({
    resolver: zodResolver(supplierSchema) as any,
    defaultValues: initialData || {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
      contactPerson: "",
      contactPersonPhone: "",
      gst: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const router = useRouter();

  // ─── Shared style tokens ───────────────────────────────────────────
  const inputClass =
    "w-full border border-(--border) bg-(--surface-2) text-(--text-primary) p-2 rounded placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)]";
  const labelClass = "block text-(--text-primary) text-sm font-semibold mb-1";
  const errorClass = "text-(--error) text-sm mt-1";
  const sectionHeading =
    "text-(--text-primary) text-base font-semibold mb-3 pb-1 border-b border-(--border)";

  return (
    <form
      onSubmit={handleSubmit((data: any) => onSubmit(data))}
      className="w-full space-y-6 rounded-xl bg-(--surface) p-6 shadow"
    >
      {/* ── Basic Info ──────────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Name *</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Supplier name"
              className={inputClass}
            />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          <div>
            <label className={labelClass}>GST Number</label>
            <input
              type="text"
              {...register("gst")}
              placeholder="GST number"
              className={inputClass}
            />
            {errors.gst && <p className={errorClass}>{errors.gst.message}</p>}
          </div>

          <div>
            <label className={labelClass}>Email</label>
            <input
              type="text"
              {...register("email")}
              placeholder="email@example.com"
              className={inputClass}
            />
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Phone</label>
            <input
              type="text"
              {...register("phone")}
              placeholder="+91 XXXXX XXXXX"
              className={inputClass}
            />
            {errors.phone && (
              <p className={errorClass}>{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Address ─────────────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClass}>Street Address</label>
            <input
              type="text"
              {...register("address")}
              placeholder="Street address"
              className={inputClass}
            />
            {errors.address && (
              <p className={errorClass}>{errors.address.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>City</label>
            <input
              type="text"
              {...register("city")}
              placeholder="City"
              className={inputClass}
            />
            {errors.city && <p className={errorClass}>{errors.city.message}</p>}
          </div>

          <div>
            <label className={labelClass}>State</label>
            <input
              type="text"
              {...register("state")}
              placeholder="State"
              className={inputClass}
            />
            {errors.state && (
              <p className={errorClass}>{errors.state.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Pincode</label>
            <input
              type="text"
              {...register("pincode")}
              placeholder="Pincode"
              className={inputClass}
            />
            {errors.pincode && (
              <p className={errorClass}>{errors.pincode.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Country</label>
            <input
              type="text"
              {...register("country")}
              placeholder="Country"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* ── Contact Person ──────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Contact Person</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Contact Person</label>
            <input
              type="text"
              {...register("contactPerson")}
              placeholder="Contact person name"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Contact Person Phone</label>
            <input
              type="text"
              {...register("contactPersonPhone")}
              placeholder="Phone number"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* ── Actions ─────────────────────────────────────────── */}
      <div className="flex justify-end space-x-2 pt-2">
        <button
          type="button"
          onClick={() => router.back()}
          disabled={isLoading}
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
              ? "Update Supplier"
              : "Create Supplier"}
        </button>
      </div>
    </form>
  );
}
