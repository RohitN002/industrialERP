"use client";

import DesignationForm from "@/modules/components/designation/DesignationForm";
import { useCreateDesignation } from "@/lib/store/useDesignation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateDesignationPage() {
  const createMutation = useCreateDesignation();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Designation created successfully!");
        router.push("/dashboard/designation");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add New Designation</h1>
        <p className="text-gray-400 text-sm mt-1">
          Fill in the details to create a new designation.
        </p>
      </div>

      <DesignationForm
        onSubmit={handleSubmit}
        isLoading={createMutation.isPending}
      />
    </div>
  );
}
