import { AttendanceStatus } from "@/shared/Enums/attendance.enum";
import z from "zod";

export interface Attendance {
  id: string;
  employeeId: string;

  // business date (not timestamp)
  date: Date;

  status: AttendanceStatus;

  // actual event timestamps (UTC)
  checkIn?: Date;
  checkOut?: Date;

  source: "manual" | "biometric" | "system";

  createdAt: Date;
  updatedAt: Date;
}

export const attendanceSchema = z.object({
  userId: z.string().min(1, "Employee ID is required"),
  date: z.coerce.date().optional(),
  status: z.string().min(1, "Status is required"),
  checkIn: z.coerce.date().optional(),
  checkOut: z.coerce.date().optional(),
});
export type AttendanceInput = z.infer<typeof attendanceSchema>;

export interface AttendanceResponse {
  data: Attendance[];
  message: string;
}
