import { CategoryInput, categorySchema } from "@/modules/product/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";


export default function CategoryForm({ initialData, onSubmit, isLoading }:any){
    const router=useRouter()
    console.log("initialData",initialData)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<CategoryInput>({
        resolver: zodResolver(categorySchema) as any,
        defaultValues: initialData || {
          name: "",
  
        },
      });
    return (
       <form onSubmit={handleSubmit((data:any)=>onSubmit(data))}>
        <div className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Category Name</label>
                <input type="text" id="name" {...register("name")} className="mt-1 p-4 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div className="flex justify-end gap-3">
                <button type="button" onClick={() => router.back()} className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700">Cancel</button>
                <button type="submit" disabled={isLoading} className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">{isLoading ? "Creating..." : "Create Category"}</button>
            </div>
        </div>
       </form>
    )

}