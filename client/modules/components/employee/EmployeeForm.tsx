"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeInput, employeeSchema } from "./employee.schema";
import { useRouter } from "next/navigation";
import Select, { SingleValue } from "react-select";
import { Controller } from "react-hook-form";
import { useDepartments } from "@/lib/store/useDepartment";
import { useRoles } from "@/lib/store/useRole";
import { useDesignations } from "@/lib/store/useDesignation";
import { useEffect } from "react";

export default function EmployeeForm({
  initialData,
  onSubmit,
  isLoading,
}: {
  initialData?: any;
  onSubmit: any;
  isLoading?: boolean;
}) {
  const router = useRouter();
  const { data: departments } = useDepartments();
  const { data: roles } = useRoles();
  const { data: designations } = useDesignations();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmployeeInput>({
    resolver: zodResolver(employeeSchema) as any,
    defaultValues: initialData
      ? {
          name: initialData.name,
          email: initialData.email,
          mobileNumber: initialData.mobileNumber,
          dateOfBirth:
            new Date(initialData.dateOfBirth).toISOString().split("T")[0] ||
            initialData.dateOfBirth,
          address: initialData.address,
          designationId: initialData.designationId,
          departmentId: initialData.departmentId,
          fatherName: initialData.fatherName,
          motherName: initialData.motherName,
          city: initialData.city,
          state: initialData.state,
          pincode: initialData.pincode,
          country: initialData.country,
          gender: initialData.gender,
          contactPerson: initialData.contactPerson,
          contactPersonPhone: initialData.contactPersonPhone,
        }
      : {},
  });

  const roleOptions =
    roles?.map((role) => ({
      value: role.id.toString(),
      label: role.name,
    })) || [];

  const departmentOptions =
    departments?.map((department) => ({
      value: department.id.toString(),
      label: department.name,
    })) || [];

  const designationOptions =
    designations?.map((designation) => ({
      value: designation.id.toString(),
      label: designation.name,
    })) || [];

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  // ─── Shared style tokens ───────────────────────────────────────────
  const inputClass =
    "w-full border border-(--border) bg-(--surface-2) text-(--text-primary) p-2 rounded placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)]";
  const labelClass = "block text-(--text-primary) text-sm font-semibold mb-1";
  const errorClass = "text-(--error) text-sm mt-1";
  const sectionHeading =
    "text-(--text-primary) text-base font-semibold mb-3 pb-1 border-b border-(--border)";

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="w-full space-y-6 rounded-xl bg-(--surface) p-6 shadow"
    >
      {/* ── Personal Info ───────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Name *</label>
            <input
              {...register("name")}
              placeholder="Full name"
              className={inputClass}
            />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          <div>
            <label className={labelClass}>Email *</label>
            <input
              {...register("email")}
              type="email"
              placeholder="email@example.com"
              className={inputClass}
            />
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Phone *</label>
            <input
              {...register("mobileNumber")}
              placeholder="+91 XXXXX XXXXX"
              className={inputClass}
            />
            {errors.mobileNumber && (
              <p className={errorClass}>{errors.mobileNumber.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Gender</label>
            <select {...register("gender")} className={inputClass}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className={errorClass}>{errors.gender.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Date of Birth</label>
            <input
              type="date"
              {...register("dateOfBirth", { valueAsDate: true })}
              className={inputClass}
            />
            {errors.dateOfBirth && (
              <p className={errorClass}>{errors.dateOfBirth.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Address ─────────────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClass}>Address *</label>
            <input
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
              {...register("city")}
              placeholder="City"
              className={inputClass}
            />
            {errors.city && <p className={errorClass}>{errors.city.message}</p>}
          </div>

          <div>
            <label className={labelClass}>State</label>
            <input
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
              {...register("country")}
              placeholder="Country"
              className={inputClass}
            />
            {errors.country && (
              <p className={errorClass}>{errors.country.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Family & Emergency ──────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Family & Emergency Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Father's Name</label>
            <input
              {...register("fatherName")}
              placeholder="Father's name"
              className={inputClass}
            />
            {errors.fatherName && (
              <p className={errorClass}>{errors.fatherName.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Mother's Name</label>
            <input
              {...register("motherName")}
              placeholder="Mother's name"
              className={inputClass}
            />
            {errors.motherName && (
              <p className={errorClass}>{errors.motherName.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Emergency Contact Person</label>
            <input
              {...register("contactPerson")}
              placeholder="Contact person name"
              className={inputClass}
            />
            {errors.contactPerson && (
              <p className={errorClass}>{errors.contactPerson.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Emergency Contact Phone</label>
            <input
              type="number"
              {...register("contactPersonPhone")}
              placeholder="Phone number"
              className={inputClass}
            />
            {errors.contactPersonPhone && (
              <p className={errorClass}>{errors.contactPersonPhone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Work Details ────────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Work Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Designation</label>
            <Controller
              name="designationId"
              control={control}
              render={({ field }: any) => {
                const selectedOption = designationOptions.find(
                  (opt) => opt.value === field.value,
                );
                return (
                  <Select
                    instanceId="designation-select"
                    options={designationOptions}
                    placeholder="Select designation..."
                    className="text-black"
                    value={selectedOption || null}
                    onChange={(option: SingleValue<any>) =>
                      field.onChange(option?.value || "")
                    }
                    onBlur={field.onBlur}
                  />
                );
              }}
            />
            {errors.designationId && (
              <p className={errorClass}>{errors.designationId.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Department</label>
            <Controller
              name="departmentId"
              control={control}
              render={({ field }: any) => {
                const selectedOption = departmentOptions.find(
                  (opt) => opt.value === field.value,
                );
                return (
                  <Select
                    instanceId="department-select"
                    options={departmentOptions}
                    placeholder="Select department..."
                    value={selectedOption || null}
                    onChange={(option: SingleValue<any>) =>
                      field.onChange(option?.value || "")
                    }
                    onBlur={field.onBlur}
                    className="text-black"
                  />
                );
              }}
            />
            {errors.departmentId && (
              <p className={errorClass}>{errors.departmentId.message}</p>
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
              ? "Update Employee"
              : "Create Employee"}
        </button>
      </div>
    </form>
  );
}
