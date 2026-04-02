"use client";

import {
  useAttendance,
  useGetAttendance,
  useUpdateAttendance,
} from "@/lib/store/useAttendance";
import { useEmployee } from "@/modules/components/employee/useEmployee";
import { AttendanceStatus } from "@/shared/Enums/attendance.enum";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function editAttendance() {
  const { id, date } = useParams();
  const { data: attendance } = useGetAttendance(id as string, date as string);

  console.log("attendance", attendance);

  const router = useRouter();

  const [form, setForm] = useState({
    status: "",
    checkIn: "",
    checkOut: "",
  });

  useEffect(() => {
    if (!attendance) return;

    setForm({
      status: attendance.status || AttendanceStatus.PRESENT,
      checkIn: attendance.checkIn ? formatTime(attendance.checkIn) : "",
      checkOut: attendance.checkOut ? formatTime(attendance.checkOut) : "",
    });
  }, [attendance]);

  const calculateWorkedHours = () => {
    const checkIn = new Date(form.checkIn);
    const checkOut = new Date(form.checkOut);
    const diff = checkOut.getTime() - checkIn.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} hrs ${minutes} mins`;
  };

  function formatTime(date: string | Date) {
    const d = new Date(date);
    return d.toISOString().slice(11, 16); // HH:mm
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }
  const updateMutation = useUpdateAttendance();
  const handleSubmit = () => {
    updateMutation.mutate(
      {
        id: attendance.id,
        data: {
          ...form,
          date: attendance.date,
          userId: attendance.userId,
          checkIn: form.checkIn ? new Date(form.checkIn) : undefined,
          checkOut: form.checkOut ? new Date(form.checkOut) : undefined,
        },
      },
      {
        onSuccess: () => {
          toast.success("Attendance updated successfully!");
          router.back();
        },
        onError: () => {
          toast.error("Failed to update attendance");
        },
      },
    );
  };
  if (!attendance) return <div>Loading...</div>;
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-blue-800 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Attendance Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Basic Info */}
          <div className="bg-gray-500 p-4 rounded-xl">
            <p>
              <span className="font-semibold">Date:</span>{" "}
              {new Date(attendance.date).toLocaleDateString()}
            </p>
            <div>
              <label className="font-semibold">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="border p-2 rounded w-full text-black"
              >
                {Object.values(AttendanceStatus).map((status) => (
                  <option key={status} value={status}>
                    {status.replace("_", " ").toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            {/* Check In */}
            <div>
              <label className="font-semibold">Check In</label>
              <input
                type="time"
                name="checkIn"
                value={form.checkIn}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>

            {/* Check Out */}
            <div>
              <label className="font-semibold">Check Out</label>
              <input
                type="time"
                name="checkOut"
                value={form.checkOut}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

          {/* Work Info */}
          <div className="bg-gray-500 p-4 rounded-xl">
            <p>
              <span className="font-semibold">Worked Hours:</span>{" "}
              {calculateWorkedHours()}
            </p>
            {/* <p>
              <span className="font-semibold">Worked Minutes:</span>{" "}
              {calcualteWorkedMinutes()} mins
            </p> */}
            {/* <p>
              <span className="font-semibold">Source:</span> {attendance.source}
            </p>
            <p>
              <span className="font-semibold">Shift ID:</span>
              select
              {attendance.shiftId || "N/A"}
            </p> */}
          </div>

          {/* Employee Info */}
          <div className="bg-gray-500 p-4 rounded-xl md:col-span-2">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              Employee Info
            </h3>
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {attendance.employee?.user?.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {attendance.employee?.user?.email}
            </p>
            <p>
              <span className="font-semibold">Designation:</span>{" "}
              {attendance.employee?.designation?.name}
            </p>
            <p>
              <span className="font-semibold">Department:</span>{" "}
              {attendance.employee?.department?.name}
            </p>
          </div>
        </div>
      </div>
      <button onClick={() => router.back()}>cancel</button>
      <button type="button" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
}
