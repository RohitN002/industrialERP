import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Department,
  DepartmentInput,
  DepartmentResponse,
} from "../components/department/department.schema";
import { api } from "@/lib/api";

export function useDepartments() {
  return useQuery({
    queryKey: ["departments"],
    queryFn: async () => {
      const res = await api<DepartmentResponse>("/departments", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    },
  });
}

export function useDepartment(id: string) {
  return useQuery({
    queryKey: ["department", id],
    queryFn: async () => {
      const res = await api<DepartmentResponse>(`/departments/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    },
  });
}

export function useCreateDepartment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: DepartmentInput) => {
      const res = await api<DepartmentResponse>("/departments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
    },
  });
}

export function useUpdateDepartment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<DepartmentInput>;
    }) =>
      api<DepartmentResponse>(`/departments/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
      queryClient.invalidateQueries({ queryKey: ["department", variables.id] });
    },
  });
}

export function useDeleteDepartment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      api(`/departments/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
    },
  });
}
