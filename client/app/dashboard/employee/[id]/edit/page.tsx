"use client";

import EmployeeForm from "@/modules/components/employee/EmployeeForm";
import {
  useEmployee,
  useUpdateEmployee,
} from "@/modules/components/employee/useEmployee";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EditEmployeePage() {
  const params = useParams();
  const id = params.id as string;
  const { data: employee, isLoading, isError } = useEmployee(id);
  const router = useRouter();
  const updateMutation = useUpdateEmployee();
  const handleSubmit = (data: any) => {
    updateMutation.mutate(
      { id, data },
      {
        onSuccess: () => {
          toast.success("Employee updated successfully!");
          router.push("/dashboard/employee");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };
  if (isLoading) {
    return (
      <div className="p-8 text-center text-gray-400">
        Loading employee data...
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="p-8 text-center text-red-400">Employee not found.</div>
    );
  }
  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Employee</h1>
        <p className="text-gray-400 text-sm mt-1">
          Update employee information
        </p>
      </div>
      <EmployeeForm
        onSubmit={handleSubmit}
        isLoading={updateMutation.isPending}
        initialData={employee}
      />
    </div>
  );
}
