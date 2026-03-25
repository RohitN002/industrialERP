"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeInput, employeeSchema } from "./employee.schema";
import { useRouter } from "next/navigation";
import useDepartment from "@/modules/hooks/useDepartment";
import useRole from "@/modules/hooks/useRole";
import Select, { SingleValue } from "react-select";
import { Controller } from "react-hook-form";

export default function EmployeeForm({initialData,onSubmit,isLoading}:{
    initialData?:any;
    onSubmit:any;
    isLoading?:boolean;
}) {
    const router = useRouter();
    const {departments,isLoading:departmentLoading,isError:departmentError} = useDepartment();
    const {roles,isLoading:roleLoading,isError:roleError} = useRole();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<EmployeeInput>({
        resolver: zodResolver(employeeSchema) as any,
        defaultValues: initialData ? {
            name: initialData.name,
            email: initialData.email,
            phone: initialData.phone,
            address: initialData.address,
            roleId: initialData.roleId,
            departmentId: initialData.departmentId,
        } : {
            roleId: "",
            departmentId: "",
        },
    });
    // const departmentOptions = departments?.map((department: { id: any; name: any; }) => ({
    //     value: department.id,
    //     label: department.name,
    // })) || [];
    // const roleOptions = roles?.map((role: { id: any; name: any; }) => ({
    //     value: role.id,
    //     label: role.name,
    // })) || [];
    return (
     <form onSubmit={handleSubmit((data)=>onSubmit(data))}
     className="w-full space-y-4 rounded-xl bg-gray-800 p-6 shadow text-white"
     >
        <div>
            <label className="block text-sm font-medium mb-1">Name *</label>
            <input
            {...register("name")}
            placeholder="Name"
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
            {...register("email")}
            placeholder="Email"
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input
            {...register("phone")}
            placeholder="Phone"
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div>
            <label className="block text-sm font-medium mb-1">Address *</label>
            <input
            {...register("address")}
            placeholder="Address"
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
        </div>
        <div>
            <label className="block text-sm font-medium mb-1">Role *</label>
            <select
            {...register("roleId")}
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
            >
                <option value="">Select Role</option>
                {roles?.map((role: { id: any; name: any; }) => (
                    <option key={role.id} value={role.id}>{role.name}</option>
                ))}
            </select>
            {errors.roleId && <p className="text-red-500 text-sm mt-1">{errors.roleId.message}</p>}
        </div>
        <div>
            <label className="block text-sm font-medium mb-1">Department *</label>
            <select
            {...register("departmentId")}
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded"
            >
                <option value="">Select Department</option>
                {departments?.map((department: { id: any; name: any; }) => (
                    <option key={department.id} value={department.id}>{department.name}</option>
                ))}
            </select>
            {errors.departmentId && <p className="text-red-500 text-sm mt-1">{errors.departmentId.message}</p>}
        </div>
        <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
            {isLoading ? "Submitting..." : "Submit"}
        </button>
     </form>
    );
}