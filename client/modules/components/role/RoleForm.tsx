"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RoleInput, Roleschema } from "./role.schema";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RoleForm({ initialData, onSubmit, isLoading }: {
  initialData?: RoleInput;
  onSubmit: (data: RoleInput) => void;
  isLoading?: boolean;
}) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<RoleInput>({
    resolver: zodResolver(Roleschema) as any,
    defaultValues: initialData ? { name: initialData.name } : {},
  });
  useEffect(() => { if (initialData) reset(initialData); }, [initialData, reset]);
  const router = useRouter();

  const inputClass = "w-full border border-(--border) bg-(--surface-2) text-(--text-primary) p-2 rounded placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)]";
  const labelClass = "block text-(--text-primary) text-sm font-semibold mb-1";
  const errorClass = "text-(--error) text-sm mt-1";

  return (
    <form onSubmit={handleSubmit((data: any) => onSubmit(data))} className="w-full space-y-6 rounded-xl bg-(--surface) p-6 shadow">
      <div>
        <label className={labelClass}>Role Name *</label>
        <input type="text" {...register("name")} placeholder="e.g. Admin, Manager" className={inputClass} />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <button type="button" onClick={() => router.back()} className="px-4 py-2 rounded font-medium text-sm border border-(--border) bg-(--btn-secondary) text-(--btn-secondary-text) hover:opacity-80 transition-opacity cursor-pointer">Cancel</button>
        <button type="submit" className="px-4 py-2 rounded font-medium text-sm bg-(--btn-primary) text-(--btn-text-white) hover:bg-(--btn-primary-hover) disabled:opacity-50 transition-colors cursor-pointer">
          {initialData ? "Update Role" : "Create Role"}
        </button>
      </div>
    </form>
  );
}
