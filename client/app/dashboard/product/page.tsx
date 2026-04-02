"use client";

import { useState } from "react";
import { useProducts, useDeleteProduct } from "@/lib/store/useProduct";
import { Product } from "@/modules/product/product.schema";
import {
  PageHeader,
  LoadingState,
  ErrorState,
  EmptyState,
  RowActions,
  ConfirmDialog,
} from "@/modules/components/shared";
import toast from "react-hot-toast";
import { useAuthStore } from "@/lib/store/auth.store";

export default function ProductPage() {
  const { data: products, isLoading, isError } = useProducts();
  const deleteMutation = useDeleteProduct();

  const [confirmId, setConfirmId] = useState<string | null>(null);

  const handleDeleteConfirm = () => {
    if (!confirmId) return;
    deleteMutation.mutate(confirmId, {
      onSuccess: () => {
        toast.success("Product deleted successfully!");
        setConfirmId(null);
      },
      onError: () => {
        toast.error("Failed to delete product.");
        setConfirmId(null);
      },
    });
  };

  return (
    <div className="flex-1 p-6 text-gray-100">
      <PageHeader
        title="Products"
        createHref="/dashboard/product/create"
        createLabel="Add Product"
      />

      <div className="bg-gray-800 rounded-xl shadow overflow-hidden border border-gray-700">
        {isLoading ? (
          <LoadingState message="Loading products..." />
        ) : isError ? (
          <ErrorState message="Error loading products." />
        ) : !products?.length ? (
          <EmptyState message="No products found. Add one to get started." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700 text-sm uppercase tracking-wider text-gray-400">
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">SKU</th>
                  <th className="p-4 font-medium">Type</th>
                  <th className="p-4 font-medium">Price</th>
                  <th className="p-4 font-medium">Stock</th>
                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {products.map((product: Product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-700/30 transition-colors"
                  >
                    <td className="p-4 font-medium">{product.name}</td>
                    <td className="p-4 text-gray-300">{product.sku}</td>
                    <td className="p-4 text-gray-300">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                        {product.type.replace("_", " ")}
                      </span>
                    </td>
                    <td className="p-4 text-gray-300">
                      ${Number(product.price).toFixed(2)}
                    </td>
                    <td className="p-4">
                      <span
                        className={`font-bold ${product.stockQuantity < 10 ? "text-red-400" : "text-green-400"}`}
                      >
                        {product.stockQuantity}
                      </span>
                    </td>
                    <td className="p-4">
                      <RowActions
                        viewHref={`/dashboard/product/${product.id}/view`}
                        editHref={`/dashboard/product/${product.id}/edit`}
                        onDelete={() => setConfirmId(product.id)}
                        isDeleting={
                          deleteMutation.isPending && confirmId === product.id
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
        title="Delete Product"
        description="Are you sure? This product will be permanently removed."
        confirmLabel="Delete Product"
        isLoading={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}
