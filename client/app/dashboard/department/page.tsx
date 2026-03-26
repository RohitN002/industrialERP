"use client";

import { Department } from "@/modules/components/department/department.schema";
import {
  ConfirmDialog,
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
  RowActions,
} from "@/modules/components/shared";
import {
  useDeleteDepartment,
  useDepartments,
} from "@/modules/routes/useDepartment";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DepartmentPage() {
  const { data: departments, isLoading, isError } = useDepartments();
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const deleteMutation = useDeleteDepartment();
  const handleDeleteConfirm = () => {
    if (!confirmId) return;
    deleteMutation.mutate(confirmId, {
      onSuccess: () => {
        toast.success("Department deleted successfully!");
        setConfirmId(null);
      },
      onError: () => {
        toast.error("Failed to delete department.");
        setConfirmId(null);
      },
    });
  };
  return (
    <div className="flex-1 p-6 text-gray-100">
      <PageHeader
        title="Departments"
        createHref="/dashboard/department/create"
        createLabel="Add Department"
      />

      <div className="bg-gray-800 rounded-xl shadow overflow-hidden border border-gray-700">
        {isLoading ? (
          <LoadingState message="Loading departments..." />
        ) : isError ? (
          <ErrorState message="Error loading departments." />
        ) : !departments?.length ? (
          <EmptyState message="No departments found. Add one to get started." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700 text-sm uppercase tracking-wider text-gray-400">
                  <th className="p-4 font-medium">Name</th>

                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {departments.map((department: Department) => (
                  <tr
                    key={department.id}
                    className="hover:bg-gray-700/30 transition-colors"
                  >
                    <td className="p-4 font-medium">{department.name}</td>

                    <td className="p-4">
                      <RowActions
                        editHref={`/dashboard/department/${department.id}/edit`}
                        onDelete={() => setConfirmId(department.id)}
                        isDeleting={
                          deleteMutation.isPending &&
                          confirmId === department.id
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
        title="Delete Department"
        description="Are you sure? This department will be permanently removed."
        confirmLabel="Delete Department"
        isLoading={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}
