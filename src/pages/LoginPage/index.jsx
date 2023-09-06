import DefaultPageAdmin from "../../components/DefaultPageAdmin";
import banner from "../../assets/banner.png";
import style from "./style.module.scss";
import { Input } from "../../components/form/Input";
import { InputPassword } from "../../components/form/InputPassword";
import { useUserContext } from "../../providers/userContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { userLogin } = useUserContext();

    const submit = (formData) => {
        userLogin(formData);
    };

    return (
        <>
            <DefaultPageAdmin>
                <section className={style.login}>
                    <div className={style.banner}>
                        <img src={banner} alt="" />
                    </div>
                    <section className={style.form}>
                        <span className="title l">ENTRAR</span>
                        <div>
                            <form onSubmit={handleSubmit(submit)}>
                                <Input
                                    autoComplete={"current-email"}
                                    type="email"
                                    placeholder="E-MAIL"
                                    {...register("email")}
                                />
                                <InputPassword
                                    autoComplete={"current-password"}
                                    placeholder="SENHA"
                                    {...register("password")}
                                />
                                <div className={style.btns}>
                                    <button
                                        type="submit"
                                        className="button black"
                                    >
                                        ACESSAR
                                    </button>
                                    <button
                                        type="button"
                                        className="button white"
                                        onClick={() => navigate("/register")}
                                    >
                                        CADASTRAR-SE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </section>
            </DefaultPageAdmin>
        </>
    );
};

export default LoginPage;