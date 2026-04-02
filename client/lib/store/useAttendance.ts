import { api } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Attendance,
  AttendanceInput,
  AttendanceResponse,
} from "../../modules/components/attendance/attendance.schema";

export function useAttendances() {
  return useQuery({
    queryKey: ["attendance"],
    queryFn: async () => {
      const res = await api<AttendanceResponse>("/attendance", {
        method: "GET",
      });
      return res.data;
    },
  });
}

export function useAttendance(id: string) {
  return useQuery({
    queryKey: ["attendance", id],
    queryFn: async () => {
      const res = await api<AttendanceResponse>(`/attendance/${id}`, {
        method: "GET",
      });
      return res.data;
    },
    enabled: !!id,
  });
}

export function useCreateAttendance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: AttendanceInput) =>
      api<Attendance>("/attendance", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
    },
  });
}

export function useUpdateAttendance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<AttendanceInput>;
    }) =>
      api<Attendance>(`/attendance/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    onSuccess: (_, variables) => {
      // Refresh list
      queryClient.invalidateQueries({ queryKey: ["attendance"] });

      // 🔥 Refresh single product
      queryClient.invalidateQueries({
        queryKey: ["attendance", variables.id],
      });
    },
  });
}

export function useDeleteAttendance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      api(`/attendance/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
    },
  });
}
