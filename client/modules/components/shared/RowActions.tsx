import Link from "next/link";
import { Edit, Trash2, Loader2, Eye, Printer } from "lucide-react";

interface RowActionsProps {
  editHref: string;
  viewHref: string;
  printHref?: string;
  onDelete: () => void;
  isDeleting?: boolean;
}

export default function RowActions({
  editHref,
  viewHref,
  printHref,
  onDelete,
  isDeleting = false,
}: RowActionsProps) {
  return (
    <div className="flex items-center justify-end gap-3 text-gray-400">
      <Link
        href={editHref}
        aria-label="Edit"
        className="hover:text-blue-400 transition-colors"
      >
        <Edit size={18} />
      </Link>
      <Link
        href={viewHref}
        aria-label="View"
        className="hover:text-blue-400 transition-colors"
      >
        <Eye size={18} />
      </Link>

      <button
        onClick={onDelete}
        disabled={isDeleting}
        aria-label="Delete"
        className="hover:text-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isDeleting ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <Trash2 size={18} />
        )}
      </button>
      {printHref && (
        <Link
          href={printHref}
          aria-label="Print"
          className="hover:text-blue-400 transition-colors"
        >
          <Printer size={18} />
        </Link>
      )}
    </div>
  );
}
