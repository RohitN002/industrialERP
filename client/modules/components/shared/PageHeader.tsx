import Link from "next/link";
import { Plus } from "lucide-react";

interface PageHeaderProps {
  title: string;
  createHref?: string;
  createLabel?: string;
}

export default function PageHeader({ title, createHref, createLabel = "New" }: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      {createHref && (
        <Link
          href={createHref}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus size={18} />
          {createLabel}
        </Link>
      )}
    </div>
  );
}
