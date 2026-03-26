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
  return (
    <form onSubmit={handleSubmit((data: any) => onSubmit(data))}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" {...register("address")} />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input type="text" id="city" {...register("city")} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input type="text" id="state" {...register("state")} />
        {errors.state && <p>{errors.state.message}</p>}
      </div>
      <div>
        <label htmlFor="pincode">Pincode</label>
        <input type="text" id="pincode" {...register("pincode")} />
        {errors.pincode && <p>{errors.pincode.message}</p>}
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input type="text" id="country" {...register("country")} />
        {errors.country && <p>{errors.country.message}</p>}
      </div>
      <div>
        <label htmlFor="contactPerson">Contact Person</label>
        <input type="text" id="contactPerson" {...register("contactPerson")} />
        {errors.contactPerson && <p>{errors.contactPerson.message}</p>}
      </div>
      <div>
        <label htmlFor="contactPersonPhone">Contact Person Phone</label>
        <input
          type="text"
          id="contactPersonPhone"
          {...register("contactPersonPhone")}
        />
        {errors.contactPersonPhone && (
          <p>{errors.contactPersonPhone.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="gst">GST</label>
        <input type="text" id="gst" {...register("gst")} />
        {errors.gst && <p>{errors.gst.message}</p>}
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <input type="text" id="company" {...register("company")} />
        {errors.company && <p>{errors.company.message}</p>}
      </div>
      <div>
        <label htmlFor="source">Source</label>
        <input type="text" id="source" {...register("source")} />
        {errors.source && <p>{errors.source.message}</p>}
      </div>
      <button type="button" onClick={() => router.back()}>
        cancel
      </button>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
