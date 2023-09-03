import { useNavigate } from "react-router-dom";
import DefaultPageAdmin from "../../components/DeafaultPageAdmin";
import styles from "./style.module.scss";
import { useContext } from "react";
import { useProductsContext } from "../../providers/productsContext";
import AdminProducts from "../../components/AdminProducts/index.jsx";

const AdminPage = () => {
  const navigate = useNavigate();

  
  const { products } = useProductsContext()
  // console.log(products)

  return (
    <DefaultPageAdmin>
      <section className={styles.sectionStyle}>
        <nav className={styles.navi}>
          <h2 className="menu" onClick={() => navigate("/admin")} >
            INÍCIO
          </h2>
          <h2 className="menu" onClick={() => navigate("")}>
            PRODUTOS
          </h2>
        </nav>
          {
            products.length == 0 ? 
            <div>
            <h1 className="title l">PAINEL DO ADMINISTRADOR</h1>
            <p className="paragraph">Seja bem vindo, administrador!</p> 
            </div>
            : <AdminProducts/>
          }

      </section>
    </DefaultPageAdmin>
  );
};

export default AdminPage;
