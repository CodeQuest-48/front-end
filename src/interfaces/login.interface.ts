import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('Debe ser un email valido'),
  password: z
    .string()
    .min(6, 'Debe contener al menos 6 caracteres')
    .max(16, 'Debe tener como maximo 16 caracteres'),
});

export type Login = z.infer<typeof LoginSchema>;
