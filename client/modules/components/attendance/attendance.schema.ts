export interface Attendance {
  id: string;
  employeeId: string;
  date: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface AttendanceInput {
  employeeId: string;
  date: string;
  status: string;
}

export interface AttendanceResponse {
  data: Attendance[];
  message: string;
  success: boolean;
}
