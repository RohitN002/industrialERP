"use client";

import { OrderForm } from "@/modules/components/order/OrderForm";
import { useCreateOrder } from "@/lib/store/useOrder";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateOrderPage() {
  const creatMutation = useCreateOrder();
  const router = useRouter();
  const handleSubmit = async (data: any) => {
    creatMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Order created successfully!");
        router.push("/dashboard/order");
      },
      onError: () => {
        toast.error("Failed to create order");
      },
    });
  };
  return (
    <div className="flex-1 p-6 text-(--text-primary) max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-(--text-primary)">Create Order</h1>
        <p className="text-(--text-secondary) text-sm mt-1">
          Fill in the details to create a new order.
        </p>
      </div>
      <OrderForm onSubmit={handleSubmit} isLoading={creatMutation.isPending} />
    </div>
  );
}
