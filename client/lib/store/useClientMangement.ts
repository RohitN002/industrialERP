import { api } from "@/lib/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  ClientManagementInput,
  ClientManagementResponse,
} from "../../modules/components/clientMangement/client.schema";
import { queryClient } from "@/lib/query-client";

export function useClients() {
  return useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const response = await api<ClientManagementResponse>("/lead", {
        method: "GET",
      });
      return response.data;
    },
  });
}

export function useClient(id: string) {
  return useQuery({
    queryKey: ["client", id],
    queryFn: async () => {
      const response = await api<ClientManagementResponse>(`/lead/${id}`, {
        method: "GET",
      });
      return response.data;
    },
  });
}

export function useCreateClient() {
  return useMutation({
    mutationFn: async (data: ClientManagementInput) => {
      api<ClientManagementResponse>("/lead", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });
}

export function useUpdateClient() {
  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: ClientManagementInput;
    }) =>
      api<ClientManagementResponse>(`/lead/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      queryClient.invalidateQueries({
        queryKey: ["client", variables.id],
      });
    },
  });
}

export function useDeleteClient() {
  return useMutation({
    mutationFn: async (id: string) =>
      api<ClientManagementResponse>(`/lead/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });
}
