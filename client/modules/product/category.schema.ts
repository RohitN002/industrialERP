import z from "zod";

export const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),

});

export type CategoryInput = z.infer<typeof categorySchema>;

export type Category = CategoryInput & {
  id: string;
  createdAt: string;
};