import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import DefaultPageAdmin from "../../components/DefaultPageAdmin";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <DefaultPageAdmin>
      <section className={styles.sectionStyle}>
        <nav className={styles.navi}>
          <h2 className="menu" onClick={() => navigate("/admin")}>
            INÍCIO
          </h2>
          <h2 className="menu" onClick={() => navigate("")}>
            PRODUTOS
          </h2>
        </nav>
        <h1 className="title l">PAINEL DO ADMINISTRADOR</h1>
        <p className="paragraph">Seja bem vindo, administrador!</p>
      </section>
    </DefaultPageAdmin>
  );
};

export default AdminPage;
