import { api } from "@/lib/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useDepartment() {
    const queryClient = useQueryClient();
    const {data:departments,isLoading,isError} = useQuery({
        queryKey: ["departments"],
        queryFn: () => api("/api/departments",{method:"GET",headers:{"Content-Type":"application/json"}})
    });
    return {departments,isLoading,isError};
       
}