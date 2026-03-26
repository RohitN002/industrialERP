import z from "zod";

export const designationSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
export type Designation = {
  id: string;
  name: string;
};
export type DesignationInput = z.infer<typeof designationSchema>;
export type DesignationResponse = {
  message: string;
  data: Designation[];
};
