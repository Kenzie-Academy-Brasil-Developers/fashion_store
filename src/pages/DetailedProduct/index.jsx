import { useParams } from "react-router";
import ProductList from "../../components/sections/ProductsSection/ProductList";
import { useEffect } from "react";
import DetailedProductSection from "../../components/sections/DetailedProductSection";
import { useProductsContext } from "../../providers/productsContext";
import DefaultTemplate from "../../components/DefaultTemplate";
import CartModal from "../../components/CartModal";
import { AnimatePresence } from "framer-motion";

const DetailedProduct = () => {
    const {
        selectedProduct,
        filteredProducts,
        handleSelectedProduct,
        products,
        modalVisible,
    } = useProductsContext();

    const { productId } = useParams();

    useEffect(() => {
        if (products.length > 0) {
            handleSelectedProduct(productId);
        }
    }, [products]);

    return (
        <>
            <DefaultTemplate>
                <DetailedProductSection selectedProduct={selectedProduct}>
                    <ProductList productsResultFinal={filteredProducts} />
                </DetailedProductSection>
            </DefaultTemplate>
            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {modalVisible && <CartModal />}
            </AnimatePresence>
        </>
    );
};

export default DetailedProduct;