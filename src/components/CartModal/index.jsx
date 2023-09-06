import style from "./style.module.scss";
import { useProductsContext } from "../../providers/productsContext";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import ModalList from "./ModalList";

const CartModal = () => {
    const { productsListToCard, setModalVisible } = useProductsContext();

    const cartTotalValue = productsListToCard.reduce(
        (total, currentProduct) =>
            total + currentProduct.price * currentProduct.amount,
        0
    );

    const price = Number(cartTotalValue).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    });

    const cartAnimation = {
        hidden: {
            x: "101%",
        },
        visible: {
            x: "0",
            transition: {
                duration: 0.15,
                ease: "linear",
            },
        },
        exit: {
            x: "101%",
            transition: {
                duration: 0.1,
            },
        },
    };

    return (
        <Backdrop onClick={setModalVisible} classname={style.modalOverlay}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                variants={cartAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={style.modal}
            >
                <div>
                    <div className={style.modalHeader}>
                        <span className="title m">CARRINHO</span>
                        <button
                            autoFocus={true}
                            onClick={() => setModalVisible(false)}
                        >
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    </div>
                    <ModalList />
                </div>
                <p className="price sm">
                    TOTAL: <span className="price sm bold">R$ {price}</span>
                </p>
            </motion.div>
        </Backdrop>
    );
};

export default CartModal;