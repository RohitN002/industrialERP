"use client";

import {
  ConfirmDialog,
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
  RowActions,
} from "@/modules/components/shared";
import { useClients, useDeleteClient } from "@/lib/store/useClientMangement";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ClientPage() {
  const { data: clients, isLoading, isError } = useClients();
  const deleteMutation = useDeleteClient();
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const handleDeleteConfirm = () => {
    if (!confirmId) return;
    deleteMutation.mutate(confirmId, {
      onSuccess: () => {
        toast.success("Client deleted successfully!");
        setConfirmId(null);
      },
      onError: () => {
        toast.error("Failed to delete client.");
        setConfirmId(null);
      },
    });
  };
  return (
    <div className="flex-1 ">
      <PageHeader
        title="Clients"
        createHref="/dashboard/client-management/create"
        createLabel="Add Client"
      />
      <div className="bg-gray-800 rounded-xl shadow overflow-hidden border border-gray-700">
        {isLoading ? (
          <LoadingState message="Loading clients..." />
        ) : isError ? (
          <ErrorState message="Error loading clients." />
        ) : !clients?.length ? (
          <EmptyState message="No clients found. Add one to get started." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700 text-sm uppercase tracking-wider text-gray-400">
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Email</th>
                  <th className="p-4 font-medium">Phone</th>
                  <th className="p-4 font-medium">Address</th>
                  <th className="p-4 font-medium">Create Quote</th>
                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {clients.map((client: any) => (
                  <tr
                    key={client.id}
                    className="hover:bg-gray-700/30 transition-colors"
                  >
                    <td className="p-4 font-medium">{client.name}</td>
                    <td className="p-4 text-gray-300">{client.email}</td>
                    <td className="p-4 text-gray-300">{client.phone}</td>
                    <td className="p-4 text-gray-300">{client.address}</td>
                    <td className="p-4">
                      {" "}
                      <Link
                        href={`/dashboard/client-management/${client.id}/quote`}
                        className="text-blue-500 hover:text-blue-600"
                      >
                        Create Quote
                      </Link>
                    </td>
                    <td className="p-4">
                      <RowActions
                        editHref={`/dashboard/client-management/${client.id}/edit`}
                        viewHref={`/dashboard/client-management/${client.id}/view`}
                        onDelete={() => setConfirmId(client.id)}
                        isDeleting={
                          deleteMutation.isPending && confirmId === client.id
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
        title="Delete Client"
        description="Are you sure? This client will be permanently removed."
        confirmLabel="Delete Client"
        isLoading={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}
