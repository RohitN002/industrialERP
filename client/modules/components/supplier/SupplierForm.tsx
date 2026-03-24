"use client"
import { useForm } from "react-hook-form"
export default function SupplierForm({initialData, onSubmit, isLoading}: {initialData?: any, onSubmit: (data: any) => void, isLoading: boolean}){
    const form = useForm({
        defaultValues: initialData,
    })
    return(
        <div>
            <h1>Supplier Form</h1>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <input type="text" {...form.register("name")} placeholder="Name" />
                <input type="text" {...form.register("email")} placeholder="Email" />
                <input type="text" {...form.register("phone")} placeholder="Phone" />
                <input type="text" {...form.register("address")} placeholder="Address" />
                <button type="submit" disabled={isLoading}>{isLoading ? "Submitting..." : "Submit"}</button>
            </form>
        </div>
    )
}
