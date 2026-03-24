"use client";

import CategoryForm from "@/modules/components/category/CategoryForm";
import { useCreateCategory } from "@/modules/hooks/useCategory";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateCategoryPage() {
    const createMutation = useCreateCategory();
    const router = useRouter();

    const handleSubmit = async (data: any) => {
        createMutation.mutate(data, {
            onSuccess: () => {
                toast.success("Category created successfully!");
                router.push("/dashboard/category");
            },
            onError: (error: any) => {
                toast.error(error.message);
            }
        });
    };

    return (
        <div>
            <h1>Create Category</h1>
            <CategoryForm
                onSubmit={handleSubmit}
                isLoading={createMutation.isPending}
            />
        </div>
    );
}