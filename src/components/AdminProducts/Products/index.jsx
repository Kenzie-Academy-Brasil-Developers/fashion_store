import { useProductsContext } from "../../../providers/productsContext";
import ModalFill from "../../ModalFill";
import style from "./style.module.scss";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


function Products({ prodcut }) {

    const { isOpenFIll, setIsOpenFill, products, modalFillObjc, setmodalFillObjc, setproductId, productsList,editProduct, delProduct } = useProductsContext()


    return (

        <>

            <li id={prodcut.id} className={style.li}>
                <img src={prodcut.image} />

                <div className={style.div1}>
                    <h4>{prodcut.name}</h4>
                    <p>{prodcut.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                </div>

                <div className={style.div2}>
                    <button onClick={() => editProduct(prodcut.id)}>
                        <MdOutlineModeEditOutline size={28} color="black" />
                    </button>

                    <button onClick={() => delProduct(prodcut.id)}>
                        <RiDeleteBin6Line size={28} color="black" />
                    </button>
                </div>

                {isOpenFIll ? <ModalFill setIsOpenFill={setIsOpenFill}></ModalFill> : null}

            </li>
        </>
    )
}
export default Products
