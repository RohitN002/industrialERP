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
  return (
    <div>
      <h1>Supplier Form</h1>
      <form onSubmit={handleSubmit((data: any) => onSubmit(data))}>
        <input type="text" {...register("name")} placeholder="Name" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input type="text" {...register("email")} placeholder="Email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input type="text" {...register("phone")} placeholder="Phone" />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        <input type="text" {...register("address")} placeholder="Address" />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
        <input type="text" {...register("city")} placeholder="City" />
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        <input type="text" {...register("state")} placeholder="State" />
        {errors.state && <p className="text-red-500">{errors.state.message}</p>}
        <input type="text" {...register("pincode")} placeholder="Pincode" />
        {errors.pincode && (
          <p className="text-red-500">{errors.pincode.message}</p>
        )}
        <input type="text" {...register("country")} placeholder="Country" />
        <input
          type="text"
          {...register("contactPerson")}
          placeholder="Contact Person"
        />
        <input
          type="text"
          {...register("contactPersonPhone")}
          placeholder="Contact Person Phone"
        />
        <input type="text" {...register("gst")} placeholder="GST" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          disabled={isLoading}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
