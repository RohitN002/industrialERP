"use client"

import { useDeleteEmployee, useEmployees } from "@/modules/components/employee/useEmployee";
import { EmptyState, ErrorState, LoadingState, PageHeader, RowActions } from "@/modules/components/shared";
import { useState } from "react";
import toast from "react-hot-toast";

export default function EmployeePage() {
    const {data:employees,isLoading,isError} = useEmployees();
    const [confirmId, setConfirmId] = useState<string | null>(null);
    const deleteMutation = useDeleteEmployee();
    const handleDeleteConfirm= ()=>{
        if(!confirmId) return;
        deleteMutation.mutate(confirmId,{
            onSuccess:()=>{
                toast.success("Employee deleted successfully!");
                setConfirmId(null);
            },onError:()=>{
            toast.error("Failed to delete employee");
            setConfirmId(null);
        }
        });
        
    }
    return (
        <div className="flex-1 bg-blue-800">
       <PageHeader
       title="Employees"
       createHref="/dashboard/employee/create"
       createLabel="Add Employee"
       />
       <div>
        {isLoading?(
            <LoadingState message="Loading employees..."/>
        ):isError?(
            <ErrorState message="Error loading employees"/>
        ):!employees?.length?(
            <EmptyState message="No employees found. Add one to get started."/>
        ):(
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-900 border-b border-gray-700 text-sm uppercase tracking-wider text-gray-400">
                            <th className="p-4 font-medium">Name</th>
                            <th className="p-4 font-medium">Email</th>
                            <th className="p-4 font-medium">Phone</th>
                            <th className="p-4 font-medium">Role</th>
                            <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {employees.map((employee: any) => (
                            <tr key={employee.id} className="hover:bg-gray-700/30 transition-colors">
                                <td className="p-4 font-medium">{employee.name}</td>
                                <td className="p-4 text-gray-300">{employee.email}</td>
                                <td className="p-4 text-gray-300">{employee.phone}</td>
                                <td className="p-4 text-gray-300">{employee.role}</td>
                                <td className="p-4">
                                    <RowActions
                                        editHref={`/dashboard/employee/${employee.id}/edit`}
                                        onDelete={() => setConfirmId(employee.id)}
                                        isDeleting={deleteMutation.isPending && confirmId === employee.id}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
       </div>
        </div>
    );
}