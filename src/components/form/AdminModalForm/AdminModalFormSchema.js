import { z } from "zod";

export const AdminModalFormSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
    price: z.string().nonempty("O preço é obrigatório"),
    image: z.string().nonempty("A imagem é obrigatória"),
    description: z
        .string()
        .nonempty("A descrição é obrigatória")
        .max(144, "Tamanho máximo de 144 caracteres"),
});
