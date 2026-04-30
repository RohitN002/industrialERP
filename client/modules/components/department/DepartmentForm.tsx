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

export function DepartmentForm({ initialData, onSubmit, isLoading }: DepartmentFormProps) {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<DepartmentInput>({
    resolver: zodResolver(departmentSchema),
    defaultValues: { name: initialData?.name || "" },
  });
  useEffect(() => { if (initialData) reset(initialData); }, [initialData, reset]);
  const router = useRouter();

  const inputClass = "w-full border border-(--border) bg-(--surface-2) text-(--text-primary) p-2 rounded placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)]";
  const labelClass = "block text-(--text-primary) text-sm font-semibold mb-1";
  const errorClass = "text-(--error) text-sm mt-1";

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))} className="w-full space-y-6 rounded-xl bg-(--surface) p-6 shadow">
      <div>
        <label htmlFor="name" className={labelClass}>Department Name *</label>
        <input id="name" {...register("name")} placeholder="e.g. Human Resources" className={inputClass} />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <button type="button" onClick={() => router.back()} className="px-4 py-2 rounded font-medium text-sm border border-(--border) bg-(--btn-secondary) text-(--btn-secondary-text) hover:opacity-80 transition-opacity cursor-pointer">Cancel</button>
        <button type="submit" disabled={isLoading} className="px-4 py-2 rounded font-medium text-sm bg-(--btn-primary) text-(--btn-text-white) hover:bg-(--btn-primary-hover) disabled:opacity-50 transition-colors cursor-pointer">
          {isLoading ? "Saving..." : initialData ? "Update Department" : "Save Department"}
        </button>
      </div>
    </form>
  );
}
