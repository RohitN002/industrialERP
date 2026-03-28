"use client";
import {
  ConfirmDialog,
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
  RowActions,
} from "@/modules/components/shared";
import { useDeleteSupplier, useSuppliers } from "@/modules/routes/useSupplier";
import { useState } from "react";
import toast from "react-hot-toast";
export default function SupplierPage() {
  const { data: suppliers, isLoading, isError } = useSuppliers();
  console.log("suppliers", suppliers);
  const deleteMutation = useDeleteSupplier();
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const handleDeleteConfirm = () => {
    if (!confirmId) return;
    deleteMutation.mutate(confirmId, {
      onSuccess: () => {
        toast.success("Supplier deleted successfully!");
        setConfirmId(null);
      },
      onError: () => {
        toast.error("Failed to delete category.");
        setConfirmId(null);
      },
    });
  };
  return (
    <div>
      <PageHeader
        title="Supplier"
        createHref="/dashboard/supplier/create"
        createLabel="Add Supplier"
      />
      <div className="bg-gray-800 rounded-xl shadow overflow-hidden border border-gray-700">
        {isLoading ? (
          <LoadingState message="Loading suppliers..." />
        ) : isError ? (
          <ErrorState message="Error loading suppliers" />
        ) : !suppliers?.length ? (
          <EmptyState message="No suppliers found" />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700 text-sm uppercase tracking-wider text-gray-400">
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Email</th>
                  <th className="p-4 font-medium">Phone</th>
                  <th className="p-4 font-medium">Address</th>
                  <th className="p-4 font-medium">City</th>
                  <th className="p-4 font-medium">State</th>
                  <th className="p-4 font-medium">Pincode</th>
                  <th className="p-4 font-medium">Country</th>
                  <th className="p-4 font-medium">Contact Person</th>
                  <th className="p-4 font-medium">Contact Person Phone</th>
                  <th className="p-4 font-medium">GST</th>
                  <th className="p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {suppliers?.map((supplier: any) => (
                  <tr
                    key={supplier.id}
                    className="hover:bg-gray-700/30 transition-colors"
                  >
                    <td className="p-4 font-medium">{supplier.name}</td>
                    <td className="p-4 font-medium">{supplier.email}</td>
                    <td className="p-4 font-medium">{supplier.phone}</td>
                    <td className="p-4 font-medium">{supplier.address}</td>
                    <td className="p-4 font-medium">{supplier.city}</td>
                    <td className="p-4 font-medium">{supplier.state}</td>
                    <td className="p-4 font-medium">{supplier.pincode}</td>
                    <td className="p-4 font-medium">{supplier.country}</td>
                    <td className="p-4 font-medium">
                      {supplier.contactPerson}
                    </td>
                    <td className="p-4 font-medium">
                      {supplier.contactPersonPhone}
                    </td>
                    <td className="p-4 font-medium">{supplier.gst}</td>
                    <td className="p-4">
                      <RowActions
                        viewHref={`/dashboard/supplier/${supplier.id}/view`}
                        editHref={`/dashboard/supplier/${supplier.id}/edit`}
                        onDelete={() => setConfirmId(supplier.id)}
                        isDeleting={
                          deleteMutation.isPending && confirmId === supplier.id
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
        title="Delete Supplier"
        description="Are you sure? This supplier will be permanently removed."
        confirmLabel="Delete Supplier"
        isLoading={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}
