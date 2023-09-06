import { AnimatePresence, motion } from "framer-motion";
import { useProductsContext } from "../../../providers/productsContext";
import style from "../adminModal.module.scss";
import { AdminModalForm } from "../../form/AdminModalForm";
import Backdrop from "../../Backdrop";

const CreateNewProductModal = () => {
    const { addProduct, setAddModalVisible } = useProductsContext();

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
            <Backdrop onClick={setAddModalVisible} classname={style.backdrop}>
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className={style.modalContainer}
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className={style.modalHeader}>
                        <h2 className="title m">NOVO PRODUTO</h2>
                        <button
                            autoFocus={true}
                            onClick={() => setAddModalVisible(false)}
                        >
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    </div>
                    <AdminModalForm
                        buttonText={"NOVO PRODUTO"}
                        submitFunction={addProduct}
                    />
                </motion.div>
            </Backdrop>
        </>
    );
};

export default CreateNewProductModal;