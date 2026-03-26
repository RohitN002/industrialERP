"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DepartmentInput, departmentSchema } from "./department.schema";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface DepartmentFormProps {
  onSubmit: (data: DepartmentInput) => void;
  isLoading: boolean;
  initialData?: DepartmentInput;
}

export function DepartmentForm({
  initialData,
  onSubmit,
  isLoading,
}: DepartmentFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<DepartmentInput>({
    resolver: zodResolver(departmentSchema),
    defaultValues: {
      name: initialData?.name || "",
    },
  });
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);
  const router = useRouter();
  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label htmlFor="name">Department Name</label>
        <input {...register("name")} placeholder="e.g. Human Resources" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="flex justify-end">
        <button type="button" onClick={() => router.back()}>
          Cancel{" "}
        </button>
        <button type="submit" disabled={isLoading}>
          Save
        </button>
      </div>
    </form>
  );
}
