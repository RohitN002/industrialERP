"use client";

import RoleForm from "@/modules/components/role/RoleForm";
import { useCreateRole } from "@/modules/routes/useRole";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateRolePage() {
  const router = useRouter();
  const createMutation = useCreateRole();
  const handleSubmit = (data: any) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Role created successfully!");
        router.push("/dashboard/role");
      },
      onError: () => {
        toast.error("Failed to create role.");
      },
    });
  };
  return (
    <div className="flex-1 p-6 text-gray-100">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create Role</h1>
        <p className="text-gray-400 text-sm mt-1">
          Add a new role to the system.
        </p>
      </div>
      <RoleForm onSubmit={handleSubmit} isLoading={createMutation.isPending} />
    </div>
  );
}
