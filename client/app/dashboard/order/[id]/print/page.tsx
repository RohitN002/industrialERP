"use client";
import ReciptTemplate from "@/modules/components/print/ReciptTemplate";
import { useOrder } from "@/lib/store/useOrder";
import { useParams } from "next/navigation";

export default function PrintOrder() {
  const { id: orderId } = useParams();

  const {
    data: order,
    isLoading: orderLoading,
    isError: orderError,
  } = useOrder(orderId as string);

  return (
    <div>
      <div id="print-area">
        <ReciptTemplate />
      </div>
      <button
        onClick={() => window.print()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Print
      </button>
    </div>
  );
}
