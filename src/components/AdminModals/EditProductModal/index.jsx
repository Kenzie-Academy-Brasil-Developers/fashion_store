import { AnimatePresence, motion } from "framer-motion";
import { useProductsContext } from "../../../providers/productsContext";
import style from "../adminModal.module.scss";
import { AdminModalForm } from "../../form/AdminModalForm";
import Backdrop from "../../Backdrop";

const EditProductModal = () => {
    const { editProduct, setEditModalVisible, setProductId } =
        useProductsContext();

    const closeModal = () => {
        setProductId(null);
        setEditModalVisible(false);
    };

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

    return (
        <>
            <Backdrop onClick={setEditModalVisible} classname={style.backdrop}>
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className={style.modalContainer}
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className={style.modalHeader}>
                        <h2 className="title m">EDITAR PRODUTO</h2>
                        <button autoFocus={true} onClick={() => closeModal()}>
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    </div>
                    <AdminModalForm
                        buttonText={"EDITAR PRODUTO"}
                        submitFunction={editProduct}
                    />
                </motion.div>
            </Backdrop>
        </>
    );
};

export default EditProductModal;