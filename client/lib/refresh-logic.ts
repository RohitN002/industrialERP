import { useAuthStore } from "./store/auth.store";
import { redirect } from "next/navigation";
let isRefreshing = false;
let refreshPromise: Promise<string | null> | null = null;

export async function refreshAccessToken(): Promise<string | null> {
  if (isRefreshing && refreshPromise) {
    return refreshPromise;
  }

  isRefreshing = true;

  refreshPromise = (async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
        {
          method: "POST",
          credentials: "include", // important if using cookies
        }
      );
console.log("refreshres", res)
      if (!res.ok) throw new Error("Refresh failed");

      const data = await res.json();

      const newToken = data.accessToken;
console.log("new token in refrshstrategy",newToken);
      useAuthStore.getState().setToken(newToken);
useAuthStore.getState().setRole(data.role);
      return newToken;
    } catch (err) {
      console.log("err",err);
      useAuthStore.getState().logout(); 
 
//    if (typeof window !== "undefined") {
//   window.location.href = "/login";
// }
      return null;
    } finally {
      isRefreshing = false;
    }
  })();

  return refreshPromise;
}