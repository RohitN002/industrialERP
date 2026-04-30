"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientManagementSchema, ClientManagementInput } from "./client.schema";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ClientForm({
  initialData,
  onSubmit,
  isLoading,
}: {
  initialData?: ClientManagementInput;
  onSubmit: (data: ClientManagementInput) => void;
  isLoading?: boolean;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClientManagementInput>({
    resolver: zodResolver(clientManagementSchema),
    defaultValues: initialData
      ? {
          name: initialData.name,
          email: initialData.email,
          phone: initialData.phone,
          address: initialData.address,
          city: initialData.city,
          state: initialData.state,
          pincode: initialData.pincode,
          country: initialData.country,
          contactPerson: initialData.contactPerson,
          contactPersonPhone: initialData.contactPersonPhone,
          gst: initialData.gst,
          company: initialData.company,
          source: initialData.source,
        }
      : {},
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
            <label htmlFor="name" className={labelClass}>
              Name *
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className={inputClass}
              placeholder="Client name"
            />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              Company
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              className={inputClass}
              placeholder="Company name"
            />
            {errors.company && (
              <p className={errorClass}>{errors.company.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={inputClass}
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              type="text"
              {...register("phone")}
              className={inputClass}
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.phone && (
              <p className={errorClass}>{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="gst" className={labelClass}>
              GST Number
            </label>
            <input
              id="gst"
              type="text"
              {...register("gst")}
              className={inputClass}
              placeholder="GST number"
            />
            {errors.gst && <p className={errorClass}>{errors.gst.message}</p>}
          </div>

          <div>
            <label htmlFor="source" className={labelClass}>
              Source
            </label>
            <input
              id="source"
              type="text"
              {...register("source")}
              className={inputClass}
              placeholder="e.g. Referral, Website"
            />
            {errors.source && (
              <p className={errorClass}>{errors.source.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Address ─────────────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="address" className={labelClass}>
              Street Address
            </label>
            <input
              id="address"
              type="text"
              {...register("address")}
              className={inputClass}
              placeholder="Street address"
            />
            {errors.address && (
              <p className={errorClass}>{errors.address.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="city" className={labelClass}>
              City
            </label>
            <input
              id="city"
              type="text"
              {...register("city")}
              className={inputClass}
              placeholder="City"
            />
            {errors.city && <p className={errorClass}>{errors.city.message}</p>}
          </div>

          <div>
            <label htmlFor="state" className={labelClass}>
              State
            </label>
            <input
              id="state"
              type="text"
              {...register("state")}
              className={inputClass}
              placeholder="State"
            />
            {errors.state && (
              <p className={errorClass}>{errors.state.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="pincode" className={labelClass}>
              Pincode
            </label>
            <input
              id="pincode"
              type="text"
              {...register("pincode")}
              className={inputClass}
              placeholder="Pincode"
            />
            {errors.pincode && (
              <p className={errorClass}>{errors.pincode.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="country" className={labelClass}>
              Country
            </label>
            <input
              id="country"
              type="text"
              {...register("country")}
              className={inputClass}
              placeholder="Country"
            />
            {errors.country && (
              <p className={errorClass}>{errors.country.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Contact Person ──────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Contact Person</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contactPerson" className={labelClass}>
              Contact Person
            </label>
            <input
              id="contactPerson"
              type="text"
              {...register("contactPerson")}
              className={inputClass}
              placeholder="Full name"
            />
            {errors.contactPerson && (
              <p className={errorClass}>{errors.contactPerson.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contactPersonPhone" className={labelClass}>
              Contact Person Phone
            </label>
            <input
              id="contactPersonPhone"
              type="text"
              {...register("contactPersonPhone")}
              className={inputClass}
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.contactPersonPhone && (
              <p className={errorClass}>{errors.contactPersonPhone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Actions ─────────────────────────────────────────── */}
      <div className="flex justify-end space-x-2 pt-2">
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
              ? "Update Client"
              : "Create Client"}
        </button>
      </div>
    </form>
  );
}
