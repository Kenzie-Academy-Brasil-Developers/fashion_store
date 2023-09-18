import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
// <<<<<<< HEAD
import { useContext } from "react";
import { useProductsContext } from "../../providers/productsContext";
import AdminProducts from "../../components/AdminProducts/index.jsx";
// =======
import DefaultPageAdmin from "../../components/DefaultPageAdmin";
// >>>>>>> 78818fb2a10300c8f15831903538623a5ff8441a

const ProductsPage = () => {
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
       
             <AdminProducts/>
          

      </section>

      
    </DefaultPageAdmin>
  );
};

export default ProductsPage;
