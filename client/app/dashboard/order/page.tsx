"use client";

import {
  ConfirmDialog,
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
  RowActions,
} from "@/modules/components/shared";
import { useClients } from "@/modules/routes/useClientMangement";
import { useDeleteOrder, useOrders } from "@/modules/routes/useOrder";
import { useProducts } from "@/modules/routes/useProduct";
import { Printer } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

export default function OrderPage() {
  const {
    data: orders,
    isLoading: orderLoading,
    isError: orderError,
  } = useOrders();
  const deleteMutation = useDeleteOrder();
  const {
    data: clients,
    isLoading: clientLoading,
    isError: clientError,
  } = useClients();
  const {
    data: products,
    isLoading: productLoading,
    isError: productError,
  } = useProducts();
  const router = useRouter();
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const handleDeleteConfirm = () => {
    if (!confirmId) return;
    deleteMutation.mutate(confirmId, {
      onSuccess: () => {
        toast.success("Order deleted successfully!");
        setConfirmId(null);
      },
      onError: () => {
        toast.error("Failed to delete order.");
        setConfirmId(null);
      },
    });
  };
  const clientMap = useMemo(() => {
    return (clients ?? []).reduce(
      (acc, client) => {
        acc[client.id] = client.name;
        return acc;
      },
      {} as Record<string, string>,
    );
  }, [clients]);
  const productMap = useMemo(() => {
    return (products ?? []).reduce(
      (acc, product) => {
        acc[product.id] = product.name;
        return acc;
      },
      {} as Record<string, string>,
    );
  }, [products]);
  function handlePrint(id: any): void {
    console.log(id);
    // throw new Error("Function not implemented.");
  }

  return (
    <div>
      <PageHeader
        title="Orders"
        createHref="/dashboard/order/create"
        createLabel="Add Order"
      />
      {orderLoading ? (
        <LoadingState message="Loading orders..." />
      ) : orderError ? (
        <ErrorState message="Error loading orders." />
      ) : !orders?.length ? (
        <EmptyState message="No orders found. Add one to get started." />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 border-b border-gray-700 text-sm uppercase tracking-wider text-gray-400">
                <th className="p-4 font-medium">Order Number</th>
                <th className="p-4 font-medium">Client</th>
                <th className="p-4 font-medium">Grand Total</th>
                <th className="p-4 font-medium">Actions</th>
                <th className="p-4 font-medium">Print</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {orders.map((order: any) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-700/30 transition-colors"
                >
                  <td className="p-4 font-medium">{order.orderNumber}</td>
                  <td className="p-4 text-gray-300">
                    {clientMap[order.clientId] || "N/A"}
                  </td>
                  <td className="p-4 text-gray-300">
                    Rs.{Number(order.grandTotal).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <RowActions
                      editHref={`/dashboard/order/${order.id}/edit`}
                      viewHref={`/dashboard/order/${order.id}/view`}
                      onDelete={() => setConfirmId(order.id)}
                      isDeleting={
                        deleteMutation.isPending && confirmId === order.id
                      }
                    />
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handlePrint(order.id)}
                      className="hover:text-blue-400 transition-colors"
                    >
                      <Printer size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ConfirmDialog
        isOpen={!!confirmId}
        title="Delete Order"
        description="Are you sure? This order will be permanently removed."
        confirmLabel="Delete Order"
        isLoading={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}
