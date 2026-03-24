"use client"
import CategoryForm from "@/modules/components/category/CategoryForm";
import SupplierForm from "@/modules/components/supplier/SupplierForm";
import { useCreateSupplier } from "@/modules/hooks/useSupplier";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function createSupplierPage(){
    const createMutation = useCreateSupplier();
    const router = useRouter();
    const handleSubmit = async (data: any) => {
        createMutation.mutate(data, {
            onSuccess: () => {
                toast.success("Supplier created successfully!");
                router.push("/dashboard/supplier");
            },
            onError: (error) => {
                toast.error(error.message);
            }
        });
    };
return(
    <div>
        <h1>Create Supplier</h1>
        <SupplierForm onSubmit={handleSubmit} isLoading={createMutation.isPending} />
    </div>
)
}