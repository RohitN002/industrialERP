"use client";

import EmployeeForm from "@/modules/components/employee/EmployeeForm";
import {
  useCreateEmployee,
  useEmployee,
} from "@/modules/components/employee/useEmployee";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateEmployeePage() {
  const createMutation = useCreateEmployee();
  const router = useRouter();
  const handleSubmit = async (data: any) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Employee created successfully!");
        router.push("/dashboard/employee");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };
  return (
    <div className="flex-1 bg-blue-800">
      <div>
        <h1>Create Employee</h1>
        <p>Add a new employee to your organization</p>
      </div>
      <EmployeeForm
        onSubmit={handleSubmit}
        isLoading={createMutation.isPending}
      />
    </div>
  );
}
