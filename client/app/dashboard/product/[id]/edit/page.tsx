"use client";

import ProductForm from "@/modules/components/forms/ProductForm";
import { useProduct, useUpdateProduct } from "@/lib/store/useProduct";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function EditProductPage() {
  const params = useParams();
  const id = params?.id as string;
  console.log("id", id);
  const { data: product, isLoading, isError } = useProduct(id);
  const updateMutation = useUpdateProduct();
  const router = useRouter();

  const handleSubmit = (data: any) => {
    updateMutation.mutate(
      { id, data },
      {
        onSuccess: () => {
          toast.success("Product updated successfully!");
          router.push("/dashboard/product");
        },
      },
    );
  };

  if (isLoading) {
    return (
      <div className="p-8 text-center text-gray-400">
        Loading product data...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-8 text-center text-red-400">Product not found.</div>
    );
  }

  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Product</h1>
        <p className="text-gray-400 text-sm mt-1">
          Update the details for this product item.
        </p>
      </div>

      <ProductForm
        initialData={product as any}
        onSubmit={handleSubmit}
        isLoading={updateMutation.isPending}
      />
    </div>
  );
}
