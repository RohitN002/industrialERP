import z from "zod";

export const departmentSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type DepartmentInput = z.infer<typeof departmentSchema>;
export type Department = {
  id: string;
  name: string;
};

export type DepartmentResponse = {
  message: string;
  data: Department[];
};
