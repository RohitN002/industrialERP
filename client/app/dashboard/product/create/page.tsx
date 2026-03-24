"use client";

import ProductForm from "@/modules/components/product/ProductForm";
import { useCreateProduct } from "@/modules/hooks/useProduct";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCategories } from "@/modules/hooks/useCategory";
import { useSuppliers } from "@/modules/hooks/useSupplier";

export default function CreateProductPage() {
  const {data:categories,isLoading:categoryLoading,isError:categoryError} = useCategories();
  const {data:suppliers,isLoading:supplierLoading,isError:supplierError} = useSuppliers();
  const createMutation = useCreateProduct();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Product created successfully!");
        router.push("/dashboard/product");
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };

  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add New Product</h1>
        <p className="text-gray-400 text-sm mt-1">Fill in the details to create a new product inventory item.</p>
      </div>

      <ProductForm onSubmit={handleSubmit} isLoading={createMutation.isPending} />
    </div>
  );
}
