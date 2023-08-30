import { useEffect, useRef, useState } from "react";
import CardModal from "./CardModal";
import style from "./style.module.scss";
import { MdClose } from "react-icons/md";
import { useProductsContext } from "../../providers/productsContext";

const CartModal = () => {
    const { productsListToCard, setProductsListToCard, setModalVisible } = useProductsContext()
    const refModal = useRef(null);

    const value = productsListToCard.reduce(
        (total, currentProduct) => total + currentProduct.price,
        0
    );

    const price = Number(value).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    });

    useEffect(() => {
        const Click = (e) => {
            !refModal.current?.contains(e.target) ? setModalVisible(false) : null;
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
                <div className={style.modal} ref={refModal}>
                    <div>
                        <div className={style.modalHeader}>
                            <span>CARRINHO</span>
                            <button onClick={() => setModalVisible(false)}>
                                <MdClose size={28} color="black" />
                            </button>
                        </div>
                        <ul className={style.list}>
                            {productsListToCard != "" ? (
                                productsListToCard.map((product, index) => (
                                    <CardModal
                                        key={`${product.id}_${index}`}
                                        product={product}
                                        setProductsListToCard={setProductsListToCard}
                                        productsListToCard={productsListToCard}
                                        index={index}
                                    />
                                ))
                            ) : (
                                <span>Sem items no carrinho</span>
                            )}
                        </ul>
                    </div>
                    <span>Total: R$ {price}</span>
                </div>
            </div>
        </>
    );
};

export default CartModal;
