"use client";
import { useRouter, useParams } from "next/navigation";
import { useQuoteById, useUpdateQuote } from "@/lib/store/useQuote";
import { QuoteSchemaType } from "@/modules/components/quote/quote.schema";

import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import QuoteForm from "@/modules/components/quote/QuoteForm";

export default function EditQuotePage() {
  const router = useRouter();
  const params = useParams();
  const quoteId = String(params.quoteId);
  console.log("quoteId", quoteId);
  const { data: quote, isLoading: isLoadingQuote } = useQuoteById(quoteId);
  const updateMutation = useUpdateQuote();
  const handleSubmit = (data: QuoteSchemaType) => {
    updateMutation.mutate(
      { ...data, id: quoteId },
      {
        onSuccess: () => {
          toast.success("Quote updated successfully!");
          router.push(`/dashboard/client-management/${params.id}/quote`);
        },
        onError: (error) => {
          toast.error(error.message || "Failed to update quote.");
        },
      },
    );
  };

  if (isLoadingQuote) {
    return (
      <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Edit Quote</h1>
          <p className="text-muted-foreground text-sm">Update quote</p>
        </div>
      </div>
      <QuoteForm
        onSubmit={handleSubmit}
        initialData={quote}
        isLoading={updateMutation.isPending}
      />
    </div>
  );
}
