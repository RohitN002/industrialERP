"use client";

import { useParams } from "next/navigation";

export default function editAttendance() {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Attendance</h1>
    </div>
  );
}
