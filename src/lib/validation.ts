import {z} from "zod"

const requiredString = z.string().trim().min(1, "Obrigatorio")

export const signUpSchema = z.object({
    email: requiredString.email("Email invalido"),
    username: requiredString.regex(
        /^[a-zA-Z0-9_-]+$/, "Apenas letras, numeros e -_ são permitidos"
    )
})