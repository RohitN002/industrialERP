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
  console.log("params", params);
  const clientId = String(params.id);
  console.log("clientId", clientId);
  const {
    data: quotes,
    isLoading,
    isError,
    error,
  } = useQuotesByClientId(clientId);
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
        ) : (quotes && quotes?.length === 0) || !quotes ? (
          <EmptyState message="No Quotes Found" />
        ) : (
          <div className="overflow-x-auto bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
            <table className="w-full">
              <thead className="bg-[#FFFFFF]">
                <tr className="border-b border-[#E2E8F0]">
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wider">
                    Quote Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wider">
                    Quote Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wider">
                    Expirky Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wider">
                    Currency
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wider">
                    Sub Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wider">
                    Discount Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wider">
                    Tax Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wider">
                    Grand Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#FFFFFF]">
                {quotes?.map((quote: any) => (
                  <tr key={quote.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475569]">
                      {quote.quoteNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475569]">
                      {quote.quoteName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475569]">
                      {quote.expiryDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475569]">
                      {quote.currency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475569]">
                      {quote.subTotal}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475569]">
                      {quote.discountTotal}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475569]">
                      {quote.taxTotal}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475569]">
                      {quote.grandTotal}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475569]">
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
