"use client";

import { useState } from "react";
import { useProductions, useDeleteProduction } from "@/lib/store/useProduction";
import {
  PageHeader,
  LoadingState,
  ErrorState,
  EmptyState,
  ConfirmDialog,
} from "@/modules/components/shared";
import { ProductionTable } from "@/modules/components/production";
import toast from "react-hot-toast";

export default function ProductionPage() {
  const { data: productions, isLoading, isError } = useProductions();
  const deleteMutation = useDeleteProduction();

  const [confirmId, setConfirmId] = useState<string | null>(null);

  const handleDeleteConfirm = () => {
    if (!confirmId) return;
    deleteMutation.mutate(confirmId, {
      onSuccess: () => {
        toast.success("Production batch deleted!");
        setConfirmId(null);
      },
      onError: () => {
        toast.error("Failed to delete batch.");
        setConfirmId(null);
      },
    });
  };

  return (
    <div className="flex-1 p-6 text-(--text-primary)">
      <PageHeader
        title="Production Batches"
        createHref="/dashboard/production/create"
        createLabel="New Batch"
      />

      <div className="bg-(--surface) rounded-xl shadow overflow-hidden border border-(--border)">
        {isLoading ? (
          <LoadingState message="Loading production batches..." />
        ) : isError ? (
          <ErrorState message="Error loading production data." />
        ) : !productions?.length ? (
          <EmptyState message="No batches found. Start a new production batch." />
        ) : (
          <ProductionTable
            productions={productions}
            onDelete={(id) => setConfirmId(id)}
            deletingId={deleteMutation.isPending ? confirmId : null}
          />
        )}
      </div>

      <ConfirmDialog
        isOpen={!!confirmId}
        title="Delete Production Batch"
        description="This action cannot be undone. All associated material records will be removed."
        confirmLabel="Delete Batch"
        isLoading={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}
