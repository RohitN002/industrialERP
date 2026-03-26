import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { SupplierResponse } from "@/types/supplier.type";

export function useSuppliers() {
    return useQuery({
        queryKey: ["suppliers"],
        queryFn: async () => {const res=await api<SupplierResponse>("/supplier", {
            method: "GET",
        }); return res.data}
    });
}

export function useSupplier(id: string) {
    return useQuery({
        queryKey: ["supplier", id],
        queryFn: async () => {const res=await api<SupplierResponse>(`/supplier/${id}`, {
            method: "GET",
        }); return res.data}
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

export function useUpdateSupplier( id:string) {
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

export function useDeleteSupplier() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => api(`/supplier/${id}`, {
            method: "DELETE",
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["suppliers"] });
        },
    });
}