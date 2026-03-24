import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function useSuppliers() {
    return useQuery({
        queryKey: ["suppliers"],
        queryFn: () => api("/supplier", {
            method: "GET",
        }),
    });
}

export function useSupplier(id: string) {
    return useQuery({
        queryKey: ["supplier", id],
        queryFn: () => api(`/supplier/${id}`),
    });
}

export function useCreateSupplier() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: any) => api("/supplier", {
            method: "POST",
            body: JSON.stringify(data),
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["suppliers"] });
        },
    });
}

export function useUpdateSupplier(id: string) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: any) => api(`/supplier/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["suppliers"] });
        },
    });
}

export function useDeleteSupplier(id: string) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => api(`/supplier/${id}`, {
            method: "DELETE",
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["suppliers"] });
        },
    });
}