"use client";

import CategoryForm from "@/modules/components/category/CategoryForm";
import { useCategory, useUpdateCategory } from "@/lib/store/useCategory";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EditCategoryPage() {
  const params = useParams();
  const id = params?.id as string;

  const { data: category, isLoading, isError } = useCategory(id);
  console.log("data", category);
  const updateMutation = useUpdateCategory(id);
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    updateMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Category updated successfully!");
        router.push("/dashboard/category");
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading category</div>;

  return (
    <div>
      <h1>Edit Category</h1>
      <CategoryForm
        initialData={category}
        onSubmit={handleSubmit}
        isLoading={updateMutation.isPending}
      />
    </div>
  );
}
