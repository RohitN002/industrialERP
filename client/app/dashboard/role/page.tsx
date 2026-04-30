"use client";

import { Role } from "@/modules/components/role/role.schema";
import {
  ConfirmDialog,
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
  RowActions,
} from "@/modules/components/shared";
import { useDeleteRole, useRoles } from "@/lib/store/useRole";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RolePage() {
  const { data: roles, isLoading, isError } = useRoles();
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const deleteMutation = useDeleteRole();
  const handleDeleteConfirm = () => {
    if (!confirmId) return;
    deleteMutation.mutate(confirmId, {
      onSuccess: () => {
        toast.success("Role deleted successfully!");
        setConfirmId(null);
      },
      onError: () => {
        toast.error("Failed to delete role.");
        setConfirmId(null);
      },
    });
  };
  return (
    <div className="flex-1 p-6 text-(--text-primary)">
      <PageHeader
        title="Roles"
        createHref="/dashboard/role/create"
        createLabel="Add Role"
      />

      <div className="bg-(--surface) rounded-xl shadow overflow-hidden border border-(--border)">
        {isLoading ? (
          <LoadingState message="Loading roles..." />
        ) : isError ? (
          <ErrorState message="Error loading roles." />
        ) : !roles?.length ? (
          <EmptyState message="No roles found. Add one to get started." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-(--surface-3) border-b border-(--border) text-sm uppercase tracking-wider text-(--text-secondary)">
                  <th className="p-4 font-medium">Name</th>

                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--border)">
                {roles.map((role: Role) => (
                  <tr
                    key={role.id}
                    className="hover:bg-(--hover) transition-colors"
                  >
                    <td className="p-4 font-medium">{role.name}</td>

                    <td className="p-4">
                      <RowActions
                        viewHref={`/dashboard/role/${role.id}/view`}
                        editHref={`/dashboard/role/${role.id}/edit`}
                        onDelete={() => setConfirmId(role.id)}
                        isDeleting={
                          deleteMutation.isPending && confirmId === role.id
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ConfirmDialog
        isOpen={!!confirmId}
        title="Delete Role"
        description="Are you sure? This role will be permanently removed."
        confirmLabel="Delete Role"
        isLoading={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}
