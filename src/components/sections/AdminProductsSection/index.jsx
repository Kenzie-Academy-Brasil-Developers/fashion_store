import styles from "./style.module.scss";
import { RxPlusCircled } from "react-icons/rx";
import AdminNavButtons from "../../AdminNavButtons";
import { useProductsContext } from "../../../providers/productsContext";
import AdminProductList from "./AdminProductList";
import { motion } from "framer-motion";

const AdminProductsSection = () => {
    const { products, setAddModalVisible } = useProductsContext();

    return (
        <section className={styles.productsAdminSection}>
            <AdminNavButtons />
            <div className={styles.addProduct}>
                <h1 className="title l">PRODUTOS</h1>
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    transition={{
                        type: "tween",
                    }}
                    className="button black breadcrumbs"
                    onClick={() => setAddModalVisible(true)}
                >
                    <RxPlusCircled size={30} />
                    <span>NOVO PRODUTO</span>
                </motion.button>
            </div>
            <p className="paragraph">Gerencie os produtos do catálogo</p>
            <div>
                <AdminProductList products={products} />
            </div>
        </section>
    );
};

export default AdminProductsSection;