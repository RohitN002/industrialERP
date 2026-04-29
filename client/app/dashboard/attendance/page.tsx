"use client";

import { useAttendance, useAttendances } from "@/lib/store/useAttendance";
import {
  useDeleteEmployee,
  useEmployees,
} from "@/modules/components/employee/useEmployee";
import {
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
  RowActions,
} from "@/modules/components/shared";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Attendance() {
  const { data: employees, isLoading, isError } = useEmployees();
  const {
    data: attendance,
    isLoading: attendanceLoading,
    isError: attendanceError,
  } = useAttendances({ month: 3, year: 2026 });
  console.log("data", attendance);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const deleteMutation = useDeleteEmployee();
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate(); // month is 1-based
  };
  const formattedDate = (date: string) => {
    return new Date(date).toISOString().split("T")[0];
  };
  const getLocalDay = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.getUTCDate(); // force UTC to avoid timezone bugs
  };

  const getWeekday = (year: number, month: number, day: number) => {
    return new Date(year, month - 1, day).toLocaleDateString("en-US", {
      weekday: "short",
    });
  };
  const year = 2026;
  const month = 3;
  const router = useRouter();
  const daysInMonth = getDaysInMonth(year, month);

  return (
    <div>
      <PageHeader
        title="Attendance"
        createHref="/dashboard/attendance/create"
        createLabel="Add Attendance"
      />
      <div>
        {isLoading ? (
          <LoadingState message="Loading Attendance..." />
        ) : isError ? (
          <ErrorState message="Error loading Attendance." />
        ) : !employees?.length ? (
          <EmptyState message="No Attendance found. Add one to get started." />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-(--surfaceHover) text-(--textPrimary)">
                  {/* Sticky Employee Column */}
                  <th className="p-3 text-left sticky left-0 z-10 bg-(--surfaceHover) text-(--textPrimary)">
                    Employee
                  </th>
                  <th className="p-3 text-center text-(--textPrimary)">P</th>
                  <th className="p-3 text-center text-(--textPrimary)">A</th>
                  <th className="p-3 text-center text-(--textPrimary)">L</th>

                  {/* Dynamic Days */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;

                    return (
                      <th key={day} className="p-2 text-center min-w-[60px]">
                        <div className="flex flex-col">
                          <span>{day}</span>
                          <span className="text-xs text-(--textSecondary)">
                            {getWeekday(year, month, day)}
                          </span>
                        </div>
                      </th>
                    );
                  })}

                  {/* Summary */}
                </tr>
              </thead>

              <tbody>
                {attendance?.map((emp: any) => (
                  <tr
                    key={emp.employeeId}
                    className="border-b border-gray-700 hover:bg-gray-800/40"
                  >
                    {/* Sticky Name */}
                    <td className="p-3 font-medium sticky left-0 bg-gray-800 z-10">
                      <div className="flex flex-col">
                        <span>{emp.name}</span>
                        <span className="text-xs text-gray-400">
                          {emp.email}
                        </span>
                      </div>
                    </td>
                    {/* Summary */}
                    <td className="text-center text-green-400 font-bold">
                      {emp.totalPresentDays}
                    </td>
                    <td className="text-center text-red-400 font-bold">
                      {emp.totalAbsentDays}
                    </td>
                    <td className="text-center text-yellow-400 font-bold">
                      {emp.totalLeaveDays}
                    </td>
                    {/* Attendance Cells */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;

                      // if you followed my hook → attendanceMap exists
                      const status =
                        emp.attendanceMap?.get(day) ??
                        emp.attendance?.find(
                          (a: any) => new Date(a.date).getUTCDate() === day,
                        )?.status;
                      const date = emp.attendance?.find(
                        (a: any) => new Date(a.date).getUTCDate() === day,
                      )?.date;
                      return (
                        <td key={day} className="p-2 text-center">
                          <span
                            className={`px-2 py-1 rounded text-xs font-bold
                        ${
                          status === "PRESENT"
                            ? "bg-green-600"
                            : status === "ABSENT"
                              ? "bg-red-600"
                              : status === "LEAVE"
                                ? "bg-yellow-600"
                                : "bg-gray-700"
                        }`}
                            onClick={() =>
                              router.push(
                                `/dashboard/attendance/${emp.employeeId}/${formattedDate(date)}/edit`,
                              )
                            }
                          >
                            {status?.[0] || "-"}
                          </span>
                        </td>
                      );
                    })}
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
