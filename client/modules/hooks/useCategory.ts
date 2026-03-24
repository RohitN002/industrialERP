import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";


export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await api<CategoryResponse>("/categories", { method: "GET" });
      return res.data; // ✅ now valid
    },
  });
};
export const useCategory = (id: string) => {
    return useQuery({
        queryKey: ["categories", id],
        queryFn: async () =>{ const res = await  api<CategoryResponse>(`/categories/${id}`,{method:"GET"}) ;return res.data}
    });
};

export const useCreateCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: any) => api("/categories", {
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
        mutationFn: (data: any) => api(`/categories/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
};

 export const useDeleteCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            api(`/categories/${id}`, {
                method: "DELETE",
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
};
