import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminModalFormSchema } from "./AdminModalFormSchema";
import { useState } from "react";
import { RxPlusCircled } from "react-icons/rx"
import styles from "./style.module.scss";
import { Input, TextArea } from "../Input";

export const AdminModalForm = ({ submitFunction, buttonText }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(AdminModalFormSchema),
    });

    const [isLoading, setIsLoading] = useState(false);


    const submit = (formData) => {
        submitFunction(formData, setIsLoading);
    };

    return (
        <form className={styles.flexBox} onSubmit={handleSubmit(submit)}>
            <Input
                autoFocus={true}
                disabled={isLoading}
                type="text"
                {...register("name")}
                error={errors.name}
                placeholder="NOME"
            />
            <Input
                autoComplete={"new-price"}
                disabled={isLoading}
                type="number"
                {...register("price")}
                error={errors.price}
                placeholder="PREÇO(R$)"
            />
            <Input
                autoComplete={"new-image"}
                disabled={isLoading}
                type="text"
                {...register("image")}
                error={errors.image}
                placeholder="IMAGEM(URL)"
            />
            <TextArea 
                autoComplete={"new-description"}
                disabled={isLoading}
                {...register("description")}
                error={errors.description}
                placeholder="DESCRIÇÃO RESUMIDA"
            />
            <button className="button black breadcrumbs" type="submit">
                {isLoading ? (
                    "Publicando..."
                ) : (
                    <>
                        <RxPlusCircled size={30} />
                        <span>{buttonText}</span>
                    </>
                )}
            </button>
        </form>
    );
};
