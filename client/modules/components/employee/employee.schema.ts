import z from "zod";

export const employeeSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(1, "Phone is required"),
    address: z.string().min(1, "Address is required"),
    roleId: z.string().min(1, "Role is required"),
    departmentId: z.string().min(1, "Department is required"),
});

export type EmployeeInput = z.infer<typeof employeeSchema>;