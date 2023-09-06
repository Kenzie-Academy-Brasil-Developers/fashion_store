import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { useState } from "react";
import styles from "./style.module.scss";
import { useUserContext } from "../../../providers/userContext";

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

    const { userRegister } = useUserContext();

    const submit = (formData) => {
        userRegister(formData, setLoading);
    };
    return (
        <form className={styles.flexBox} onSubmit={handleSubmit(submit)}>
            <Input
                autoComplete="username"
                disabled={loading}
                type="text"
                {...register("name")}
                error={errors.name}
                placeholder="NOME"
            />

            <Input
                autoComplete={"new-email"}
                disabled={loading}
                type="text"
                {...register("email")}
                error={errors.email}
                placeholder="E-MAIL"
            />
            <InputPassword
                autoComplete={"new-password"}
                disabled={loading}
                {...register("password")}
                error={errors.password}
                placeholder="SENHA"
            />
            <InputPassword
                autoComplete={"new-password"}
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