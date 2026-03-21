type ProductionStatus = "PLANNED" | "IN_PROGRESS" | "COMPLETED" | "REJECTED";

interface StatusBadgeProps {
  status: ProductionStatus;
}

const STATUS_STYLES: Record<ProductionStatus, string> = {
  PLANNED: "bg-gray-500/20 text-gray-400",
  IN_PROGRESS: "bg-blue-500/20 text-blue-400",
  COMPLETED: "bg-green-500/20 text-green-400",
  REJECTED: "bg-red-500/20 text-red-400",
};

const STATUS_LABELS: Record<ProductionStatus, string> = {
  PLANNED: "Planned",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
  REJECTED: "Rejected",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const style = STATUS_STYLES[status] ?? "bg-gray-500/20 text-gray-400";
  const label = STATUS_LABELS[status] ?? status;

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${style}`}>
      {label}
    </span>
  );
}

export type { ProductionStatus };
