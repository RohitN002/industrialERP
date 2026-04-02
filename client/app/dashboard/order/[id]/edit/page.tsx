"use client";

import { OrderForm } from "@/modules/components/order/OrderForm";
import { ErrorState, LoadingState } from "@/modules/components/shared";
import { useOrder, useUpdateOrder } from "@/lib/store/useOrder";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EditOrderPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: order, isLoading, isError } = useOrder(id);
  const updateMutation = useUpdateOrder();
  const router = useRouter();
  const handleSubmit = async (data: any) => {
    updateMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Order updated successfully!");
        router.push("/dashboard/order");
      },
      onError: () => {
        toast.error("Failed to update order");
      },
    });
  };
  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <h3 className="text-2xl font-bold">Edit order</h3>
      <p className="text-gray-400 text-sm mt-1">
        Fill in the details to edit the order.
      </p>
      {isLoading ? (
        <LoadingState message="Loading order..." />
      ) : isError ? (
        <ErrorState message="Error loading order." />
      ) : (
        <OrderForm
          initialData={order as any}
          onSubmit={handleSubmit}
          isLoading={updateMutation.isPending}
        />
      )}
    </div>
  );
}
