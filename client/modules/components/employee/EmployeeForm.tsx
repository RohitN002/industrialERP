"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeInput, employeeSchema } from "./employee.schema";
import { useRouter } from "next/navigation";
import useDepartment from "@/modules/hooks/useDepartment";
import useRole from "@/modules/hooks/useRole";
import Select, { SingleValue } from "react-select";
import { Controller } from "react-hook-form";

export default function EmployeeForm({initialData,onSubmit,isLoading}:{
    initialData?:any;
    onSubmit:any;
    isLoading?:boolean;
}) {
    return (
        <div>
            <h1>Employee Form</h1>
        </div>
    );
}