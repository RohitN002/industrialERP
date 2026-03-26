"use client";

import ClientForm from "@/modules/components/clientMangement/ClientForm";
import {
  useClient,
  useUpdateClient,
} from "@/modules/routes/useClientMangement";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EditClientPage() {
  const params = useParams();
  const id = params?.id as string;
  const { data: client, isLoading, isError } = useClient(id);
  const updateMutation = useUpdateClient();
  const router = useRouter();
  const handleSubmit = (data: any) => {
    updateMutation.mutate(
      { id, data },
      {
        onSuccess: () => {
          toast.success("Client updated successfully!");
          router.push("/dashboard/client");
        },
        onError: (error) => {
          toast.error(error.message || "Failed to update client.");
        },
      },
    );
  };
  return (
    <div className="flex-1 p-6 text-gray-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Client</h1>
        <p className="text-gray-400 text-sm mt-1">
          Update the details for this client.
        </p>
      </div>
      <ClientForm
        initialData={client as any}
        onSubmit={handleSubmit}
        isLoading={updateMutation.isPending}
      />
    </div>
  );
}
