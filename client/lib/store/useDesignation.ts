import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Designation,
  DesignationInput,
  DesignationResponse,
} from "../../modules/components/designation/designation.schema";
import { api } from "@/lib/api";

export function useDesignations() {
  return useQuery({
    queryKey: ["designation"],
    queryFn: async () => {
      const res = await api<DesignationResponse>("/designation", {
        method: "GET",
      });
      return res.data;
    },
  });
}

export function useDesignationById(id: string) {
  return useQuery({
    queryKey: ["designation", id],
    queryFn: async () => {
      const res = await api<DesignationResponse>(`/designation/${id}`, {
        method: "GET",
      });
      return res.data;
    },
    enabled: !!id,
  });
}

export function useCreateDesignation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: DesignationInput) =>
      api<Designation>("/designation", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["designation"] });
    },
  });
}

export function useUpdateDesignation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<DesignationInput>;
    }) =>
      api<Designation>(`/designation/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    onSuccess: (_, variables) => {
      // Refresh list
      queryClient.invalidateQueries({ queryKey: ["designation"] });

      // 🔥 Refresh single product
      queryClient.invalidateQueries({
        queryKey: ["designation", variables.id],
      });
    },
  });
}

export function useDeleteDesignation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      api(`/designation/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["designation"] });
    },
  });
}
