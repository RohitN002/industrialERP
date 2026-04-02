"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { attendanceSchema, AttendanceInput } from "./attendance.schema";
export default function AttendanceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AttendanceInput>({
    resolver: zodResolver(attendanceSchema) as any,
  });

  return (
    <div>
      <h1>Attendance Form</h1>
    </div>
  );
}
