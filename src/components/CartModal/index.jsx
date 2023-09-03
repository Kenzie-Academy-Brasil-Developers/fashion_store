import { useEffect, useRef } from "react";
import CardModal from "./CardModal";
import style from "./style.module.scss";
import { useProductsContext } from "../../providers/productsContext";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const CartModal = () => {
    const { productsListToCard, setModalVisible, modalVisible } =
        useProductsContext();
    const refModal = useRef(null);


    const value = productsListToCard.reduce(
        (total, currentProduct) => total + (currentProduct.price * currentProduct.amount),
        0
    );
    
    const price = Number(value).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    });

    useEffect(() => {
        const Click = (e) => {
            !refModal.current?.contains(e.target)
                ? setModalVisible(false)
                : null;
        };

        window.addEventListener("mousedown", Click);

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                Click(event);
            }
        });

        return () => {
            window.removeEventListener("mousedown", Click);
        };
    }, []);

    return (
        <>
            <div role="dialog" className={style.modalOverlay}>
                <AnimatePresence>
                    {modalVisible && (
                        <motion.div
                            initial={{
                                transform: "translate3d(101%, 0, 0)",
                            }}
                            animate={{
                                transform: "translate3d(0%, 0, 0)",
                            }}
                            exit={{
                                transform: "translate3d(101%, 0, 0)",
                            }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                            }}
                            className={style.modal}
                            ref={refModal}
                        >
                            <div>
                                <div className={style.modalHeader}>
                                    <span className="title m">CARRINHO</span>
                                    <button
                                        onClick={() => setModalVisible(false)}
                                    >
                                        <span className="material-symbols-outlined">
                                            close
                                        </span>
                                    </button>
                                </div>
                                {productsListToCard.length > 0 ? (
                                    <ul className={style.list}>
                                        {productsListToCard.map(
                                            (product, index) => (
                                                <CardModal
                                                    key={`${product.id}_${index}`}
                                                    product={product}
                                                    index={index}
                                                />
                                            )
                                        )}
                                    </ul>
                                ) : (
                                    <span>Sem items no carrinho</span>
                                )}
                            </div>
                            <div className={style.buySection}>
                                <p className="price sm">
                                    TOTAL:{" "}
                                    <span className="price sm bold">
                                        R$ {price}
                                    </span>
                                </p>
                                {productsListToCard.length > 0 ? (
                                    <button className="price sm bold">
                                        <Link to={"/buy"}>Finalizar compra</Link>
                                    </button>
                                ) : null}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default CartModal;
