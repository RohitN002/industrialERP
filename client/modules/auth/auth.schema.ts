import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
    email: z.string().email(),
    name: z.string().min(2),
  password: z.string().min(6),
  roles: z.array(z.enum(['ADMIN', 'USER', 'EMPLOYEE', 'CUSTOMER'])).min(1).default(['ADMIN']),
  isActive: z.boolean().default(true),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.input<typeof registerSchema>; 