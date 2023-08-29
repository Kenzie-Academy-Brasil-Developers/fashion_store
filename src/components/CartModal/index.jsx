import { useEffect, useRef } from "react";
import CardModal from "./CardModal";
import style from "./style.module.scss";

const CartModal = ({ setVisible }) => {
    const refModal = useRef(null);
    useEffect(() => {
        const Click = (e) => {
            !refModal.current?.contains(e.target) ? setVisible(false) : null;
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
                    <div className={style.modalHeader}>
                        <span>CARRINHO</span>
                        <button onClick={() => setVisible(false)}>X</button>
                    </div>
                    <div className={style.list}>
                        <CardModal />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartModal;
