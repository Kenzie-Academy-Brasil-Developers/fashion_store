import { motion } from "framer-motion";
import { useProductsContext } from "../../providers/productsContext";

const Backdrop = ({ children, onClick, classname }) => {
    const { setProductId } = useProductsContext();

    const closeModal = (e) => {
        if (e.key === "Escape") {
            setProductId(null);
            onClick(false);
        }
    };

    const closeOnClick = () => {
        onClick(false);
        setProductId(null);
    };

    return (
        <>
            <motion.div
                onClick={() => closeOnClick()}
                onKeyDown={closeModal}
                className={classname}
                role="dialog"
                tabIndex={-1}
                autoFocus={true}
            >
                {children}
            </motion.div>
        </>
    );
};

export default Backdrop;