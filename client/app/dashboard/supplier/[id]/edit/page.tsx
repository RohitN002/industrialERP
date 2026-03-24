"use client"
import SupplierForm from "@/modules/components/supplier/SupplierForm";
import { useSupplier, useUpdateSupplier } from "@/modules/hooks/useSupplier";
import { useParams, useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function EditSupplierPage(){
    const params = useParams();
    const id = params?.id as string;
    const {data:supplier,isLoading,isError} = useSupplier(id);
    const updateMutation = useUpdateSupplier(id)
    const router = useRouter();
    console.log("supplier",supplier)
    const handleSubmit= async(data:any)=>{
        updateMutation.mutate(data, {
            onSuccess: () => {
                toast.success("Supplier updated successfully!");
                router.push("/dashboard/supplier");
            },
            onError: (error: any) => {
                toast.error(error.message);
            }
        });
    }
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error loading supplier</div>
    return(
        <div>
            <h1>Edit Supplier</h1>
            <SupplierForm initialData={supplier} onSubmit={handleSubmit} isLoading={updateMutation.isPending} />
        </div>
    )
}