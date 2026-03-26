"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RoleInput, Roleschema } from "./role.schema";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function RoleForm({
  initialData,
  onSubmit,
  isLoading,
}: {
  initialData?: RoleInput;
  onSubmit: (data: RoleInput) => void;
  isLoading?: boolean;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleInput>({
    resolver: zodResolver(Roleschema) as any,
    defaultValues: initialData
      ? {
          name: initialData.name,
        }
      : {},
  });
  const router = useRouter();
  return (
    <form onSubmit={handleSubmit((data: any) => onSubmit(data))}>
      <input type="text" {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
      <button type="button" onClick={() => router.back()}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
