import { useProductsContext } from "../../providers/productsContext";
import Products from "./Products";
import ModalCreate from "../ModalCreate/index.jsx";
import style from "./style.module.scss";
import { FiPlusCircle } from "react-icons/fi";


const AdminProducts = () => {
  const { products, setIsOpen, isOpen } = useProductsContext()

  return (
    <>
      <div className={style.div}>
      <h1 className="title l">PRODUTOS</h1>
        <p className="paragraph">Gerencie os pordutos dos catálogo</p>

        <button onClick={() => setIsOpen(true)}>
          <FiPlusCircle size={28} color="white" />
          NOVO PORDUTO
        </button>
      </div>

      {isOpen ? <ModalCreate setIsOpen={setIsOpen}></ModalCreate> : null}

      <ul className={style.ul}>
        {products.map(prodcut => (
          <Products key={prodcut.id} prodcut={prodcut} />
        ))}
      </ul>


    </>
  );
};

export default AdminProducts;
