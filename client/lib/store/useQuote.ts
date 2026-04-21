import { QuoteResponse } from "@/modules/components/quote/quote.schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../api";

export function useQuotesByClientId(clientId: string) {
  return useQuery({
    queryKey: ["quotes", clientId],
    queryFn: async () => {
      console.log("clientId", clientId);
      const res = await api<QuoteResponse>(`/quotes/client/${clientId}`, {
        method: "GET",
      });
      return res.data;
    },
    enabled: !!clientId,
  });
}

export function useDeleteQuote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      api(`/quote/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quotes"] });
    },
  });
}

export function useCreateQuote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) =>
      api("/quotes", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quotes"] });
    },
  });
}

export function useUpdateQuote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) =>
      api(`/quote/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quotes"] });
    },
  });
}

export function useQuoteById(id: string) {
  return useQuery({
    queryKey: ["quote", id],
    queryFn: async () => {
      const res = await api<QuoteResponse>(`/quote/${id}`, {
        method: "GET",
      });
      return res.data;
    },
    enabled: !!id,
  });
}
