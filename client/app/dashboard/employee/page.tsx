"use client";

import {
  useDeleteEmployee,
  useEmployees,
} from "@/modules/components/employee/useEmployee";
import {
  ConfirmDialog,
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
  RowActions,
} from "@/modules/components/shared";
import { useDepartments } from "@/modules/routes/useDepartment";
import { useDesignations } from "@/modules/routes/useDesignation";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

export default function EmployeePage() {
  const {
    data: designations,
    isLoading: designationLoading,
    isError: designationError,
  } = useDesignations();
  const {
    data: departments,
    isLoading: departmentLoading,
    isError: departmentError,
  } = useDepartments();
  const { data: employees, isLoading, isError } = useEmployees();
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const deleteMutation = useDeleteEmployee();
  const handleDeleteConfirm = () => {
    if (!confirmId) return;
    deleteMutation.mutate(confirmId, {
      onSuccess: () => {
        toast.success("Employee deleted successfully!");
        setConfirmId(null);
      },
      onError: () => {
        toast.error("Failed to delete employee");
        setConfirmId(null);
      },
    });
  };
  const designationMap = useMemo(() => {
    return (designations ?? []).reduce(
      (acc, designation) => {
        acc[designation.id] = designation.name;
        return acc;
      },
      {} as Record<string, string>,
    );
  }, [designations]);

  const departmentMap = useMemo(() => {
    return (departments ?? []).reduce(
      (acc, department) => {
        acc[department.id] = department.name;
        return acc;
      },
      {} as Record<string, string>,
    );
  }, [departments]);
  return (
    <div className="flex-1">
      <PageHeader
        title="Employees"
        createHref="/dashboard/employee/create"
        createLabel="Add Employee"
      />
      <div>
        {isLoading ? (
          <LoadingState message="Loading employees..." />
        ) : isError ? (
          <ErrorState message="Error loading employees" />
        ) : !employees?.length ? (
          <EmptyState message="No employees found. Add one to get started." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700 text-sm uppercase tracking-wider text-gray-400">
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Email</th>
                  <th className="p-4 font-medium">Mobile Number</th>
                  <th className="p-4 font-medium">Department</th>
                  <th className="p-4 font-medium">Designation</th>
                  <th>Address</th>
                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-700">
                {employees.map((employee: any) => (
                  <tr
                    key={employee.id}
                    className="hover:bg-gray-700/30 transition-colors"
                  >
                    <td className="p-4 font-medium">{employee.name}</td>
                    <td className="p-4 text-gray-300">{employee.email}</td>
                    <td className="p-4 text-gray-300">
                      {employee.mobileNumber}
                    </td>
                    <td className="p-4 text-gray-300">
                      {departmentMap[employee.departmentId] || "N/A"}
                    </td>
                    <td className="p-4 text-gray-300">
                      {designationMap[employee.designationId] || "N/A"}
                    </td>
                    <td className="p-4 text-gray-300">{employee.address}</td>
                    <td className="p-4">
                      <RowActions
                        viewHref={`/dashboard/employee/${employee.id}/view`}
                        editHref={`/dashboard/employee/${employee.id}/edit`}
                        onDelete={() => setConfirmId(employee.id)}
                        isDeleting={
                          deleteMutation.isPending && confirmId === employee.id
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <ConfirmDialog
        isOpen={!!confirmId}
        title="Delete Employee"
        description="Are you sure? this Employee will be permenently removed "
        confirmLabel="Delete Employee"
        isLoading={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}
