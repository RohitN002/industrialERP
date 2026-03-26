"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeInput, employeeSchema } from "./employee.schema";
import { useRouter } from "next/navigation";

import Select, { SingleValue } from "react-select";
import { Controller } from "react-hook-form";
import { useDepartment, useDepartments } from "@/modules/routes/useDepartment";
import { useRole, useRoles } from "@/modules/routes/useRole";
import { useDesignations } from "@/modules/routes/useDesignation";
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
  const {
    data: departments,
    isLoading: departmentLoading,
    isError: departmentError,
  } = useDepartments();
  const {
    data: roles,
    isLoading: roleLoading,
    isError: roleError,
  } = useRoles();
  const {
    data: designations,
    isLoading: desginationLoading,
    isError: designationError,
  } = useDesignations();

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
  console.log(initialData);
  useEffect(() => {
  if (initialData) {
    reset(initialData);
  }
}, [initialData, reset]);
  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="w-full space-y-4 rounded-xl bg-gray-800 p-6 shadow text-white"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Name *</label>
        <input
          {...register("name")}
          placeholder="Name"
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone *</label>
        <input
          {...register("mobileNumber")}
          placeholder="Phone"
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.mobileNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.mobileNumber.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select
          {...register("gender")}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && (
          <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          {...register("dateOfBirth", { valueAsDate: true })}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-sm mt-1">
            {errors.dateOfBirth.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Address *</label>
        <input
          {...register("address")}
          placeholder="Address"
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>
      <div>
        <label>city</label>
        <input
          {...register("city")}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
        )}
      </div>
      <div>
        <label>state</label>
        <input
          {...register("state")}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.state && (
          <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
        )}
      </div>
      <div>
        <label>pincode</label>
        <input
          {...register("pincode")}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.pincode && (
          <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>
        )}
      </div>
      <div>
        <label>country</label>
        <input
          {...register("country")}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </div>
      <div>
        <label>fatherName</label>
        <input
          {...register("fatherName")}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.fatherName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.fatherName.message}
          </p>
        )}
      </div>
      <div>
        <label>motherName</label>
        <input
          {...register("motherName")}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.motherName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.motherName.message}
          </p>
        )}
      </div>
      <div>
        <label>contactPerson</label>
        <input
          {...register("contactPerson")}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.contactPerson && (
          <p className="text-red-500 text-sm mt-1">
            {errors.contactPerson.message}
          </p>
        )}
      </div>
      <div>
        <label>contactPersonPhone</label>
        <input
          type="number"
          {...register("contactPersonPhone")}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.contactPersonPhone && (
          <p className="text-red-500 text-sm mt-1">
            {errors.contactPersonPhone.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="">Designation</label>
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
          <p className="text-red-500 text-sm mt-1">
            {errors.designationId.message}
          </p>
        )}
      </div>
      <div className="">
        <label htmlFor="">Department</label>
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
          <p className="text-red-500 text-sm mt-1">
            {errors.departmentId.message}
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={() => router.back()}
        className="w-full bg-gray-600 hover:bg-gray-700 text-white p-2 rounded"
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
