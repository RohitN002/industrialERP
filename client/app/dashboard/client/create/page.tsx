"use client";

import ClientForm from "@/modules/components/clientMangement/ClientForm";
import { useClients, useCreateClient } from "@/lib/store/useClientMangement";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateClientPage() {
  const {
    data: clients,
    isLoading: clientsLoading,
    isError: clientsIsError,
  } = useClients();
  const router = useRouter();
  const createMutation = useCreateClient();
  const handleSubmit = (data: any) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Client created successfully!");
        router.push("/dashboard/client");
      },
      onError: (error) => {
        toast.error(error.message || "Failed to create client.");
      },
    });
  };
  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create new client</h1>
        <p className="text-gray-400 text-sm mt-1">
          Fill in the details to create a new client.
        </p>
      </div>
      <ClientForm
        onSubmit={handleSubmit}
        isLoading={createMutation.isPending}
      />
    </div>
  );
}
