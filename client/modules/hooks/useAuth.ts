import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { LoginInput, RegisterInput } from "../auth/auth.schema";
import { useAuthStore } from "@/lib/store/auth.store";

export function useLogin() {
  const  setToken  = useAuthStore((s)=>s.setToken);
  return useMutation({
    mutationFn: (data: LoginInput) =>
      api("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
         credentials: "include",
      }),
       onSuccess: (data:any) => {
      setToken(data.accessToken);}
  });
}

export function useRegister() {

  return useMutation({
    mutationFn: (data: RegisterInput) =>
      api("/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
          credentials: "include",
      }),
    
  });
}

export function useLogout() {
  const  setToken  = useAuthStore((s)=>s.setToken);
  return useMutation({
    mutationFn: () =>
      api("/auth/logout", {
        method: "POST",
      }),
       onSuccess: () => {
      setToken(null);}
  });
}

