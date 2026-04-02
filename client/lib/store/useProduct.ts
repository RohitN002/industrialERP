import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import {
  ProductInput,
  Product,
  ProductResponse,
} from "../../modules/product/product.schema";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await api<ProductResponse>("/product", {
        method: "GET",
      });
      return res.data;
    },
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await api<ProductResponse>(`/product/${id}`, {
        method: "GET",
      });
      return res.data;
    },
    enabled: !!id,
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ProductInput) =>
      api<Product>("/product", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<ProductInput> }) =>
      api<Product>(`/product/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    onSuccess: (_, variables) => {
      // Refresh list
      queryClient.invalidateQueries({ queryKey: ["products"] });

      // 🔥 Refresh single product
      queryClient.invalidateQueries({
        queryKey: ["product", variables.id],
      });
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      api(`/product/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
