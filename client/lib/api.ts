export async function api<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch("http://localhost:8000"+url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Request failed");
  }

  return res.json();
}