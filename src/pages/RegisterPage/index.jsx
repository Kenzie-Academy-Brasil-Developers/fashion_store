import registerImg from "../../assets/registerImage.png";
import backArrow from "../../assets/backArrow.png";
import { RegisterForm } from "../../components/form/RegisterForm";
import styles from "./style.module.scss";
import { useNavigate } from "react-router";
import DefaultPageAdmin from "../../components/DefaultPageAdmin";

export const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <DefaultPageAdmin>
            <div className={styles.containerBox}>
                <img src={registerImg} alt="register image" />
                <div className={styles.flexBox}>
                    <button
                        onClick={() => navigate("/login")}
                        className={styles.buttonBack}
                    >
                        <img src={backArrow} alt="back Arrow" />
                        <p className="paragraph m">VOLTAR</p>
                    </button>
                    <h1 className="title xl mobile">CADASTRAR-SE</h1>
                    <p className={`${styles.welcome} paragraph`}>
                        Seja bem vindo, administrador!
                    </p>
                    <RegisterForm />
                </div>
            </div>
        </DefaultPageAdmin>
    );
};