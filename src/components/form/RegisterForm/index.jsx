import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";

import { useContext, useState } from "react";
import { UserContext } from "../../../providers/userContext";
import styles from "./style.module.scss";

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(registerFormSchema),
    });
    const [loading, setLoading] = useState(false);

    const { userRegister } = useContext(UserContext);

    const submit = (formData) => {
        userRegister(formData, setLoading);
    };
    return (
        <form className={styles.flexBox} onSubmit={handleSubmit(submit)}>
            <Input
                disabled={loading}
                type="text"
                {...register("name")}
                error={errors.name}
                placeholder="NOME"
            />

            <Input
                disabled={loading}
                type="text"
                {...register("email")}
                error={errors.email}
                placeholder="E-MAIL"
            />
            <InputPassword
                disabled={loading}
                {...register("password")}
                error={errors.password}
                placeholder="SENHA"
            />
            <InputPassword
                disabled={loading}
                {...register("confirmPassword")}
                error={errors.confirmPassword}
                placeholder="CONFIRMAR SENHA"
            />
            <div className={styles.registerButton}>
                <button className="button black" type="submit">
                    {loading ? "Cadastrando..." : "CADASTRAR-SE"}
                </button>
            </div>
        </form>
    );
};
