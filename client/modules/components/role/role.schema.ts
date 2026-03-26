import z from "zod";

export const Roleschema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type RoleInput = z.infer<typeof Roleschema>;
export type Role = {
  id: string;
  name: string;
};

export type RoleResponse = {
  message: string;
  data: Role[];
};
