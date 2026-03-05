import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { LoginInput, RegisterInput } from "../auth/auth.schema";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginInput) =>
      api("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: (data: RegisterInput) =>
      api("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
}