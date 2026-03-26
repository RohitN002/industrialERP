"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DesignationInput, designationSchema } from "./designation.schema";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface DesignationFormProps {
  initialData?: DesignationInput;
  onSubmit: (data: DesignationInput) => void;
  isLoading?: boolean;
}

export default function DesignationForm({
  initialData,
  onSubmit,
  isLoading,
}: DesignationFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DesignationInput>({
    resolver: zodResolver(designationSchema) as any,
    defaultValues: initialData
      ? {
          name: initialData.name,
        }
      : {},
  });
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);
  return (
    <form
      onSubmit={handleSubmit((data: any) => onSubmit(data))}
      className="w-full space-y-4 rounded-xl bg-gray-800 p-6 shadow text-white"
    >
      <div>
        <label className="block text-sm font-medium mb-1">
          Designation Name *
        </label>
        <input
          {...register("name")}
          placeholder="e.g. Software Engineer"
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded disabled:opacity-50"
        >
          {isLoading ? "Saving..." : "Save Designation"}
        </button>
      </div>
    </form>
  );
}
