import toast from "react-hot-toast";

export async function api<T>(url: string, options?: RequestInit) {
  try {
    const res = await fetch("http://localhost:8000/api" + url, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    const data = await res.json(); 
    if (!res.ok) {
      toast.error(data?.message || "Request failed");
      throw new Error(data?.message);
    }

    toast.success(data?.message || "Success");

    return data as T;
  } catch (error: any) {
    console.log(error);
    toast.error(error.message || "Request failed");
    throw error;
  }
}