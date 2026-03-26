"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../../routes/useAuth";
import { LoginInput, loginSchema } from "../../auth/auth.schema";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const login = useLogin();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginInput) => {
    login.mutate(data, {
      onSuccess: () => {
        router.push("/dashboard");
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4 rounded-xl bg-gray-800 p-6 shadow"
      >
        <h1 className="text-xl font-bold">Login</h1>

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
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded"
        >
          {login.isPending ? "Loading..." : "Login"}
        </button>
      </form>
      <div className="flex justify-center">
        <p>Don't have an account?</p>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}
