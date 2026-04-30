"use client";

import ProductionForm from "@/modules/components/production/ProductionForm";
import { useCreateProduction } from "@/lib/store/useProduction";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateProductionPage() {
  const createMutation = useCreateProduction();
  const router = useRouter();

  const handleSubmit = (data: any) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Production batch created!");
        router.push("/dashboard/production");
      },
    });
  };

  return (
    <div className="flex-1 p-6 text-(--text-primary) max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-(--text-primary)">New Production Batch</h1>
        <p className="text-(--text-secondary) text-sm mt-1">
          Plan and log the raw materials utilized for a new finished good.
        </p>
      </div>

      <ProductionForm
        onSubmit={handleSubmit}
        isLoading={createMutation.isPending}
      />
    </div>
  );
}
