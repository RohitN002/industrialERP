"use client";
import { useParams, useRouter } from "next/navigation";
export default function viewClientPage() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  return (
    <div>
      <h1>Client</h1>
      <button onClick={() => router.back()}> back</button>
      <button> edit</button>
    </div>
  );
}
