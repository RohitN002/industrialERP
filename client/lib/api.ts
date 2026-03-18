import toast from "react-hot-toast";
import { useAuthStore } from "./store/auth.store";
import { refreshAccessToken } from "./refresh-logic";

export async function api<T>(
  url: string,
  options?: RequestInit,
  showSuccess = false
): Promise<T> {
  const makeRequest = async (token?: string) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...(options?.headers || {}),
      },
    });
  };

  try {
    let token = useAuthStore.getState().accessToken;

    let res = await makeRequest(token!);

    // 🔥 If token expired → try refresh
    if (res.status === 401) {
      const newToken = await refreshAccessToken();

      if (!newToken) {
        throw new Error("Session expired. Please login again.");
      }

      // retry request with new token
      res = await makeRequest(newToken);
    }

    let data: any;
    try {
      data = await res.json();
    } catch {
      data = {};
    }

    if (!res.ok) {
      throw new Error(data?.message || "Request failed");
    }

    if (showSuccess) {
      toast.success(data?.message || "Success");
    }

    return data as T;
  } catch (error: any) {
    toast.error(error.message || "Request failed");
    throw error;
  }
}