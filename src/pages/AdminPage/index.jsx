import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import DefaultPageAdmin from "../../components/DefaultPageAdmin";
import { useUserContext } from "../../providers/userContext";
import AdminNavButtons from "../../components/AdminNavButtons";

const AdminPage = () => {
    const { user } = useUserContext()

    console.log(user);

    return (
        <DefaultPageAdmin>
            <section className={styles.sectionStyle}>
                <AdminNavButtons />
                <h1 className="title l">PAINEL DO ADMINISTRADOR</h1>
                <p className="paragraph">Seja bem vindo, {user.name}!</p>
            </section>
        </DefaultPageAdmin>
    );
};

export default AdminPage;
