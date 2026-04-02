"use client";

import RoleForm from "@/modules/components/role/RoleForm";
import { ErrorState, LoadingState } from "@/modules/components/shared";
import { useRole, useUpdateRole } from "@/lib/store/useRole";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EditRolePage() {
  const params = useParams();
  const id = params.id;
  const { data: role, isLoading, isError } = useRole(id as string);
  const updateMutation = useUpdateRole();
  const router = useRouter();
  const handleSubmit = (data: any) => {
    updateMutation.mutate(
      { id: id as string, data },
      {
        onSuccess: () => {
          toast.success("Role updated successfully!");
          router.push("/dashboard/role");
        },
        onError: () => {
          toast.error("Failed to update role.");
        },
      },
    );
  };
  return (
    <div className="flex-1 p-6 text-gray-100">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Role</h1>
        <p className="text-gray-400 text-sm mt-1">
          Update the role details below.
        </p>
      </div>
      {isLoading ? (
        <LoadingState message="Loading role..." />
      ) : isError ? (
        <ErrorState message="Error loading role." />
      ) : (
        <RoleForm
          onSubmit={handleSubmit}
          isLoading={updateMutation.isPending}
          initialData={role as any}
        />
      )}
    </div>
  );
}
