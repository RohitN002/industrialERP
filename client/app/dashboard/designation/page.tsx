"use client";

import {
  useDeleteDesignation,
  useDesignations,
} from "@/lib/store/useDesignation";
import { useState } from "react";
import DesignationForm from "@/modules/components/designation/DesignationForm";
import { useCreateDesignation } from "@/lib/store/useDesignation";
import {
  ConfirmDialog,
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
  RowActions,
} from "@/modules/components/shared";
import { Designation } from "@/modules/components/designation/designation.schema";
import toast from "react-hot-toast";

export default function DesignationPage() {
  const { data: designations, isLoading, isError } = useDesignations();
  const createDesignation = useCreateDesignation();
  const deleteMutation = useDeleteDesignation();

  const [confirmId, setConfirmId] = useState<string | null>(null);

  const handleDeleteConfirm = () => {
    if (!confirmId) return;
    deleteMutation.mutate(confirmId, {
      onSuccess: () => {
        toast.success("Designation deleted successfully!");
        setConfirmId(null);
      },
      onError: () => {
        toast.error("Failed to delete Designation.");
        setConfirmId(null);
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading designations</div>;

  return (
    <div className="space-y-4">
      <PageHeader
        title="Designations"
        createHref="/dashboard/designation/create"
        createLabel="Add Designation"
      />
      <div className="bg-gray-800 rounded-xl shadow overflow-hidden border border-gray-700">
        {isLoading ? (
          <LoadingState message="Loading designations..." />
        ) : isError ? (
          <ErrorState message="Error loading designations." />
        ) : !designations?.length ? (
          <EmptyState message="No designations found. Add one to get started." />
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
                {designations.map((designation: Designation) => (
                  <tr
                    key={designation.id}
                    className="hover:bg-gray-700/30 transition-colors"
                  >
                    <td className="p-4 font-medium">{designation.name}</td>
                    <td className="p-4">
                      <RowActions
                        viewHref={`/dashboard/designation/${designation.id}/view`}
                        editHref={`/dashboard/designation/${designation.id}/edit`}
                        onDelete={() => setConfirmId(designation.id)}
                        isDeleting={
                          deleteMutation.isPending &&
                          confirmId === designation.id
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
        title="Delete Designation"
        description="Are you sure? This designation will be permanently removed."
        confirmLabel="Delete Designation"
        isLoading={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}
