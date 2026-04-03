"use client";

import { useParams, useRouter } from "next/navigation";
import { useProducts } from "@/lib/store/useProduct";
import { ErrorState, LoadingState } from "@/modules/components/shared";

export default function CreateQuotePage() {
  const { id } = useParams();

  const router = useRouter();
  return (
    <div>
      Create Quote Page
      <button onClick={() => router.back()}> cancel</button>
      <button> save</button>
    </div>
  );
}
