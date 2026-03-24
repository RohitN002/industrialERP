import CategoryForm from "@/modules/components/category/CategoryForm";
import { useCreateCategory } from "@/modules/hooks/useCategory";
import { useRouter } from "next/router";
import toast from "react-hot-toast";


export default function createCategoryPage(){
    const createMutation = useCreateCategory();
    const router = useRouter();
    const handleSubmit = async (data: any) => {
        createMutation.mutate(data, {
            onSuccess: () => {
                toast.success("Category created successfully!");
                router.push("/dashboard/category");
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