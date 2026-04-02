"use client";

import ProductionForm from "@/modules/components/production/ProductionForm";
import { useProduction, useUpdateProduction } from "@/lib/store/useProduction";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function EditProductionPage() {
  const { id } = useParams() as { id: string };
  const { data: production, isLoading } = useProduction(id);
  const updateMutation = useUpdateProduction();
  const router = useRouter();

  const handleSubmit = (data: any) => {
    updateMutation.mutate(
      { id, data },
      {
        onSuccess: () => {
          toast.success("Production batch updated successfully!");
          router.push("/dashboard/production");
        },
      },
    );
  };

  if (isLoading) {
    return (
      <div className="p-8 text-center text-gray-400">
        Loading production data...
      </div>
    );
  }

  if (!production) {
    return (
      <div className="p-8 text-center text-red-400">
        Production batch not found.
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Production Batch</h1>
        <p className="text-gray-400 text-sm mt-1">
          Modify the status or raw material allocations for this run.
        </p>
      </div>

      <ProductionForm
        initialData={production as any}
        onSubmit={handleSubmit}
        isLoading={updateMutation.isPending}
      />
    </div>
  );
}
