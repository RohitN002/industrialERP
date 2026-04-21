"use client";

import { useParams, useRouter } from "next/navigation";
import { useProducts } from "@/lib/store/useProduct";
import { ErrorState, LoadingState } from "@/modules/components/shared";
import { useCreateQuote } from "@/lib/store/useQuote";
import QuoteForm from "@/modules/components/quote/QuoteForm";
import toast from "react-hot-toast";

export default function CreateQuotePage() {
  const paramas = useParams();
  const clientId = String(paramas.id);
  const { data: products, isLoading, isError } = useProducts();
  const createMutation = useCreateQuote();

  const router = useRouter();
  const handleSubmit = (data: any) => {
    console.log("data", JSON.stringify(data));
    createMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Quote created successfully!");
        router.push(`/dashboard/client-management/${clientId}/quote`);
      },
      onError: (error) => {
        toast.error(error.message || "Failed to create quote.");
      },
    });
  };
  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create new quote</h1>
        <p className="text-gray-400 text-sm mt-1">
          Fill in the details to create a new quote.
        </p>
      </div>
      <QuoteForm
        onSubmit={handleSubmit} 
        clientId={clientId}
        isLoading={createMutation.isPending}
      />
    </div>
  );
}
