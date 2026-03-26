"use client";

import { DepartmentForm } from "@/modules/components/department/DepartmentForm";
import {
  useDepartment,
  useUpdateDepartment,
} from "@/modules/routes/useDepartment";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EditDepartment() {
  const params = useParams();
  const id = params.id;
  const { data: department, isLoading, isError } = useDepartment(id as string);
  const updateMutation = useUpdateDepartment();
  const router = useRouter();
  const handleSubmit = async (data: any) => {
    updateMutation.mutate(
      { id: id as string, data },
      {
        onSuccess: () => {
          toast.success("Department updated successfully!");
          router.push("/dashboard/department");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };
  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Department</h1>
        <p className="text-gray-400 text-sm mt-1">
          Update the details for this department.
        </p>
      </div>
      <DepartmentForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        initialData={department as any}
      />
    </div>
  );
}
