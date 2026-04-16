"use client";

import { useDeleteQuote, useQuotesByClientId } from "@/lib/store/useQuote";
import {
  ConfirmDialog,
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
  RowActions,
} from "@/modules/components/shared";
import { useParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function QuotePage() {
  const params = useParams();
  const clientId = params.clientId;
  const {
    data: quotes,
    isLoading,
    isError,
    error,
  } = useQuotesByClientId(clientId as string);
  const deleteMutation = useDeleteQuote();
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
    <div>
      <PageHeader
        title="Quotes"
        createHref={`/dashboard/client-management/${clientId}/quote/create`}
        createLabel="Add Quote"
      />
      <div>
        {isLoading ? (
          <LoadingState message="Loading Quotes" />
        ) : isError ? (
          <ErrorState message="Error Loading Quotes" />
        ) : quotes?.length === 0 ? (
          <EmptyState message="No Quotes Found" />
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Quote Number</th>
                  <th>Quote Name</th>
                  <th>Expiry Date</th>
                  <th>Currency</th>
                  <th>Sub Total</th>
                  <th>Discount Total</th>
                  <th>Tax Total</th>
                  <th>Grand Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {quotes?.map((quote: any) => (
                  <tr key={quote.id}>
                    <td>{quote.quoteNumber}</td>
                    <td>{quote.quoteName}</td>
                    <td>{quote.expiryDate}</td>
                    <td>{quote.currency}</td>
                    <td>{quote.subTotal}</td>
                    <td>{quote.discountTotal}</td>
                    <td>{quote.taxTotal}</td>
                    <td>{quote.grandTotal}</td>
                    <td>
                      <RowActions
                        editHref={`/dashboard/client-management/${clientId}/quote/${quote.id}/edit`}
                        viewHref={`/dashboard/client-management/${clientId}/quote/${quote.id}`}
                        onDelete={() => setConfirmId(quote.id)}
                        isDeleting={deleteMutation.isPending}
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
        title="Delete Quote"
        description="Are you sure ? This quote will be permenently removed "
        confirmLabel="Delete"
        isLoading={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}
