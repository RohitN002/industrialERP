"use client";

import { OrderForm } from "@/modules/components/order/OrderForm";
import { useCreateOrder } from "@/modules/routes/useOrder";
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
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <h3 className="text-2xl font-bold">Create order</h3>
      <p className="text-gray-400 text-sm mt-1">
        Fill in the details to create a new order.
      </p>
      <OrderForm onSubmit={handleSubmit} isLoading={creatMutation.isPending} />
    </div>
  );
}
