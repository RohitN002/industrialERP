import { Production } from "../../production/production.schema";
import { RowActions } from "../shared";
import StatusBadge from "./StatusBadge";

interface ProductionTableProps {
  productions: Production[];
  onDelete: (id: string) => void;
  deletingId?: string | null;
}

export default function ProductionTable({
  productions,
  onDelete,
  deletingId,
}: ProductionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-(--surface-3) border-b border-(--border) text-sm uppercase tracking-wider text-(--text-secondary)">
            <th className="p-4 font-medium">Batch No</th>
            <th className="p-4 font-medium">Product</th>
            <th className="p-4 font-medium">Status</th>
            <th className="p-4 font-medium">Materials Used</th>
            <th className="p-4 font-medium">Created By</th>
            <th className="p-4 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-(--border)">
          {productions.map((prod) => (
            <tr
              key={prod.id}
              className="hover:bg-(--hover) transition-colors"
            >
              <td className="p-4 font-bold">{prod.batchNo}</td>
              <td className="p-4 text-(--text-secondary)">
                {prod.producedProduct?.name ?? "Unknown"}
                <span className="text-xs text-(--text-muted) ml-1">
                  ({prod.producedProduct?.sku})
                </span>
              </td>
              <td className="p-4">
                <StatusBadge status={prod.status} />
              </td>
              <td className="p-4 text-(--text-secondary)">{prod.items.length} item(s)</td>
              <td className="p-4 text-(--text-muted) text-sm">
                {prod.createdBy?.user?.name ?? "Unknown"}
              </td>
              <td className="p-4">
                <RowActions
                  editHref={`/dashboard/production/${prod.id}/edit`}
                  viewHref={`/dashboard/production/${prod.id}/view`}
                  onDelete={() => onDelete(prod.id)}
                  isDeleting={deletingId === prod.id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
