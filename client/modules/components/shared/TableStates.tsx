interface StateProps {
  message?: string;
}

export function LoadingState({ message = "Loading..." }: StateProps) {
  return (
    <div className="p-8 text-center text-gray-400 animate-pulse">{message}</div>
  );
}

export function ErrorState({ message = "Something went wrong. Please try again." }: StateProps) {
  return (
    <div className="p-8 text-center text-red-400">{message}</div>
  );
}

export function EmptyState({ message = "No records found." }: StateProps) {
  return (
    <div className="p-8 text-center text-gray-400">{message}</div>
  );
}
