import { useProductsContext } from "../../../providers/productsContext";
import Backdrop from "../../Backdrop";
import styles from "../adminModal.module.scss";
import { motion } from "framer-motion";

const DeleteProductModal = () => {
    const { setDeleteModal, productId, deleteProduct, setProductId } =
        useProductsContext();

    const dropIn = {
        hidden: {
            opacity: 0,
            y: "-20vh",
        },
        visible: {
            opacity: 1,
            y: "0",
            transition: {
                type: "tween",
                duration: 0.25,
            },
        },
        exit: {
            y: "-10vh",
            opacity: 0,
        },
    };

    const removeProduct = () => {
        setDeleteModal(false);
        deleteProduct(productId);
    };

    const closeModal = () => {
        setProductId(null);
        setDeleteModal(false);
    };

    return (
        <>
            <Backdrop onClick={setDeleteModal} classname={styles.backdrop}>
                <motion.div
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                    className={styles.deleteModalContainer}
                >
                    <div className={styles.modalHeader}>
                        <h2 className="title m">APAGAR PRODUTO?</h2>
                        <button autoFocus={true} onClick={() => closeModal()}>
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    </div>
                    <div className={styles.confirmDelete}>
                        <span className="menu sm">
                            ESTA AÇÃO NÃO PODERÁ SER DESFEITA
                        </span>
                        <button
                            onClick={() => removeProduct()}
                            className="button white"
                            type="button"
                        >
                            CONFIRMAR
                        </button>
                    </div>
                </motion.div>
            </Backdrop>
        </>
    );
};

export default DeleteProductModal;