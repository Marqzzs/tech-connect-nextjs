import { TypeOf, z } from "zod";

const requiredString = z.string().trim().min(1, "Obrigatório");

export const signUpSchema = z.object({
  email: requiredString.email("Email inválido"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Apenas letras, números e -_ são permitidos",
  ),
  password: requiredString.min(8, "Deve ser no mínimo 8 caracteres"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;
