import { useProductsContext } from "../../../../../providers/productsContext";
import style from "./style.module.scss";

const AdminProductCard = ({ product }) => {
    const price = Number(product.price).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    });

    const { setDeleteModal, setProductId, productId, setEditModalVisible } =
        useProductsContext();

    const openModal = (open) => {
        setProductId(product.id);
        open(true);
    };

    return (
        <>
            <li
                className={`${style.productCard} ${
                    productId === product.id
                        ? style.focusColor
                        : style.defaultColor
                }`}
            >
                <img src={product.image} />
                <div className={style.productInfo}>
                    <h3 className="title sm">{product.name}</h3>
                    <p className="price">R$ {price}</p>
                </div>
                <div className={style.buttons}>
                    <span
                        onClick={() => openModal(setEditModalVisible)}
                        className="material-symbols-outlined"
                    >
                        edit
                    </span>
                    <span
                        onClick={() => openModal(setDeleteModal)}
                        className="material-symbols-outlined"
                    >
                        delete
                    </span>
                </div>
            </li>
        </>
    );
};

export default AdminProductCard;