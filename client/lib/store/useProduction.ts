import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import {
  ProductionInput,
  Production,
} from "../../modules/production/production.schema";

export function useProductions() {
  return useQuery({
    queryKey: ["productions"],
    queryFn: () =>
      api<Production[]>("/production", {
        method: "GET",
      }),
  });
}

export function useProduction(id: string) {
  return useQuery({
    queryKey: ["production", id],
    queryFn: () =>
      api<Production>(`/production/${id}`, {
        method: "GET",
      }),
    enabled: !!id,
  });
}

export function useCreateProduction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ProductionInput) =>
      api<Production>("/production", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productions"] });
    },
  });
}

export function useUpdateProduction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<ProductionInput>;
    }) =>
      api<Production>(`/production/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productions"] });
    },
  });
}

export function useDeleteProduction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      api(`/production/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productions"] });
    },
  });
}
