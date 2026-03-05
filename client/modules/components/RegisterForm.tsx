"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../hooks/useAuth";
import { RegisterInput, registerSchema } from "../auth/auth.schema";
import Link from "next/link";
import router from "next/router";


export default function RegisterPage() {
  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterInput) => {
    registerMutation.mutate(data, {
      onSuccess: () => {
        router.push("/login");
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4 rounded-xl bg-gray-800     p-6 shadow"
      >
        <h1 className="text-xl font-bold">Register</h1>

        <input
          {...register("name")}
          placeholder="Name"
          className="w-full border p-2 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
       <select
  {...register("roles")}
  multiple
  className="w-full border p-2 rounded"
>
  <option value="ADMIN">ADMIN</option>
  <option value="USER">USER</option>
  <option value="EMPLOYEE">EMPLOYEE</option>
  <option value="CUSTOMER">CUSTOMER</option>
</select>
    <label className="flex items-center gap-2">
  <input type="checkbox" {...register("isActive")} />
  Is Active
</label>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded"
        >
          {registerMutation.isPending ? "Loading..." : "Register"}
        </button>
      </form>
      <div className="flex justify-center">
        <p>Already have an account?</p>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}