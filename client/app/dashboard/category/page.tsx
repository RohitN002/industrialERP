"use client";
import {
  ConfirmDialog,
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
  RowActions,
} from "@/modules/components/shared";
import { useCategories, useDeleteCategory } from "@/lib/store/useCategory";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CategoryPage() {
  const { data: categories, isLoading, isError } = useCategories();
  console.log("categories", categories);
  const deleteMutation = useDeleteCategory();
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const handleDeleteConfirm = () => {
    if (!confirmId) return;
    deleteMutation.mutate(confirmId, {
      onSuccess: () => {
        toast.success("Category deleted successfully!");
        setConfirmId(null);
      },
      onError: () => {
        toast.error("Failed to delete category.");
        setConfirmId(null);
      },
    });
  };
  console.log("categories", categories);
  return (
    <div>
      <PageHeader
        title="Category"
        createHref="/dashboard/category/create"
        createLabel="Add Category"
      />
      <div className="bg-gray-800 rounded-xl shadow overflow-hidden border border-gray-700">
        {isLoading ? (
          <LoadingState message="Loading categories..." />
        ) : isError ? (
          <ErrorState message="Error loading categories" />
        ) : !categories?.length ? (
          <EmptyState message="No categories found" />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700 text-sm uppercase tracking-wider text-gray-400">
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {categories?.map((category: any) => (
                  <tr
                    key={category.id}
                    className="hover:bg-gray-700/30 transition-colors"
                  >
                    <td className="p-4 font-medium">{category.name}</td>
                    <td className="p-4">
                      <RowActions
                        viewHref={`/dashboard/category/${category.id}/view`}
                        editHref={`/dashboard/category/${category.id}/edit`}
                        onDelete={() => setConfirmId(category.id)}
                        isDeleting={
                          deleteMutation.isPending && confirmId === category.id
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <ConfirmDialog
        isOpen={!!confirmId}
        title="Delete Category"
        description="Are you sure? This category will be permanently removed."
        confirmLabel="Delete Category"
        isLoading={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}
