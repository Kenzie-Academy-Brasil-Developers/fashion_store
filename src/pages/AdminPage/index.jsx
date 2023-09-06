import styles from "./style.module.scss";
import DefaultPageAdmin from "../../components/DefaultPageAdmin";
import { useUserContext } from "../../providers/userContext";
import AdminNavButtons from "../../components/AdminNavButtons";
import { BiLogOut } from "react-icons/bi";

const AdminPage = () => {
    const { user, userLogout } = useUserContext();

    return (
        <DefaultPageAdmin>
            <section className={styles.sectionStyle}>
                <AdminNavButtons />
                <div className={styles.logoutDiv}>
                    <h1 className="title l">PAINEL DO ADMINISTRADOR</h1>
                    <button
                        className="btn outline price l"
                        onClick={() => userLogout()}
                    >
                        SAIR
                        <BiLogOut size={30} />
                    </button>
                </div>
                <p className="paragraph">Seja bem vindo, {user.name}!</p>
            </section>
        </DefaultPageAdmin>
    );
};

export default AdminPage;