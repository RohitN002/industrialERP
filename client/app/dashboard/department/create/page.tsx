"use client";

import { DepartmentForm } from "@/modules/components/department/DepartmentForm";
import { useCreateDepartment } from "@/lib/store/useDepartment";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateDepartmentPage() {
  const createMutation = useCreateDepartment();
  const router = useRouter();
  const handleSubmit = async (data: any) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Department created successfully!");
        router.push("/dashboard/department");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };
  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add New Department</h1>
        <p className="text-gray-400 text-sm mt-1">
          Fill in the details to create a new department.
        </p>
      </div>

      <DepartmentForm
        onSubmit={handleSubmit}
        isLoading={createMutation.isPending}
      />
    </div>
  );
}
