import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";


export const useCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn:() => {
             api("/categories",{
                method:"GET",
               
            });
         
        },
    });
};

export const useCategory = (id: string) => {
    return useQuery({
        queryKey: ["category", id],
        queryFn: () => api(`/category/${id}`),
    });
};

export const useCreateCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: any) => api("/category", {
            method: "POST",
            body: JSON.stringify(data),
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
};

export const useUpdateCategory = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: any) => api(`/category/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
};

export const useDeleteCategory = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => api(`/category/${id}`, {
            method: "DELETE",
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
};
