import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { IndustryResponse } from "@/modules/components/profile/profile.schema";

export function useUpdateProfile() {}
export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await api<IndustryResponse>("/organization/", {
        method: "GET",
      });
      return res.data;
    },
  });
}
export function useIndustries() {
  return useQuery({
    queryKey: ["industries"],
    queryFn: async () => {
      const res = await api<IndustryResponse>("/organization/industries", {
        method: "GET",
      });
      return res.data;
    },
  });
}
