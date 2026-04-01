"use client";

import { useEmployees } from "@/modules/components/employee/useEmployee";

export default function Attendance() {
  const { data: employees, isLoading, isError } = useEmployees();
  console.log("data", employees);
  return (
    <div>
      <h1>Employee Attendance</h1>
    </div>
  );
}
