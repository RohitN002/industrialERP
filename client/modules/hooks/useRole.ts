import { api } from "@/lib/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useRole() {
    const queryClient = useQueryClient();
    const {data:roles,isLoading,isError} = useQuery({
        queryKey: ["roles"],
        queryFn: () => api("/api/roles",{method:"GET",headers:{"Content-Type":"application/json"}})
    });
    return {roles,isLoading,isError};
       
}