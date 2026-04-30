import {
  CategoryInput,
  categorySchema,
} from "@/modules/product/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function CategoryForm({
  initialData,
  onSubmit,
  isLoading,
}: any) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryInput>({
    resolver: zodResolver(categorySchema) as any,
    defaultValues: initialData || { name: "" },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const inputClass =
    "w-full border border-(--border) bg-(--surface-2) text-(--text-primary) p-2 rounded placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)]";
  const labelClass = "block text-(--text-primary) text-sm font-semibold mb-1";
  const errorClass = "text-(--error) text-sm mt-1";

  return (
    <form
      onSubmit={handleSubmit((data: any) => onSubmit(data))}
      className="w-full space-y-6 rounded-xl bg-(--surface) p-6 shadow"
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          Category Name *
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="e.g. Electronics"
          className={inputClass}
        />
        {errors.name && (
          <p className={errorClass}>{errors.name.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-3 pt-2">
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
              ? "Update Category"
              : "Create Category"}
        </button>
      </div>
    </form>
  );
}
