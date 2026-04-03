"use client";

import { useRouter } from "next/navigation";

export default function CreateQuotePage() {
  const router = useRouter();
  return (
    <div>
      Create Quote Page
      <button onClick={() => router.back()}> cancel</button>
      <button> save</button>
    </div>
  );
}
