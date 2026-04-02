"use client";

import DesignationForm from "@/modules/components/designation/DesignationForm";
import {
  useDesignationById,
  useUpdateDesignation,
} from "@/lib/store/useDesignation";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function EditDesignationPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();

  const { data: designation, isLoading, isError } = useDesignationById(id);
  const updateMutation = useUpdateDesignation();

  const handleSubmit = async (data: any) => {
    updateMutation.mutate(
      { id, data },
      {
        onSuccess: () => {
          toast.success("Designation updated successfully!");
          router.push("/dashboard/designation");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading designation</div>;

  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Designation</h1>
        <p className="text-gray-400 text-sm mt-1">
          Update the designation details.
        </p>
      </div>

      <DesignationForm
        onSubmit={handleSubmit}
        isLoading={updateMutation.isPending}
        initialData={designation as any}
      />
    </div>
  );
}
