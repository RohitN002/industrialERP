import { useAuthStore } from "./store/auth.store";

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
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh-token`,
        {
          method: "POST",
          credentials: "include", // important if using cookies
        }
      );

      if (!res.ok) throw new Error("Refresh failed");

      const data = await res.json();

      const newToken = data.accessToken;

      useAuthStore.getState().setToken(newToken);

      return newToken;
    } catch (err) {
      useAuthStore.getState().logout(); 
      return null;
    } finally {
      isRefreshing = false;
    }
  })();

  return refreshPromise;
}