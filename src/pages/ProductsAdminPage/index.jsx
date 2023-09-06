import DefaultPageAdmin from "../../components/DefaultPageAdmin";
import { useProductsContext } from "../../providers/productsContext";
import AdminProductsSection from "../../components/sections/AdminProductsSection";
import CreateNewProductModal from "../../components/AdminModals/CreateNewProductModal";
import { AnimatePresence } from "framer-motion";
import DeleteProductModal from "../../components/AdminModals/DeleteProductModal";
import EditProductModal from "../../components/AdminModals/EditProductModal";

const ProductsAdminPage = () => {
    const { addModalVisible, deleteModal, editModalVisible } =
        useProductsContext();

    return (
        <>
            <DefaultPageAdmin>
                <AdminProductsSection />
            </DefaultPageAdmin>
            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {editModalVisible && <EditProductModal />}
                {deleteModal && <DeleteProductModal />}
                {addModalVisible && <CreateNewProductModal />}
            </AnimatePresence>
        </>
    );
};

export default ProductsAdminPage;