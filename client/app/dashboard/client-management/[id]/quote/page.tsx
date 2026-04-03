"use client";

import { PageHeader } from "@/modules/components/shared";
import { useParams } from "next/navigation";

export default function QuotePage() {
  const params = useParams();
  const clientId = params.clientId;
  return (
    <div>
      <PageHeader
        title="Quotes"
        createHref={`/dashboard/client-management/${clientId}/quote/create`}
        createLabel="Add Quote"
      />
      <h1>Quote Page</h1>
    </div>
  );
}
