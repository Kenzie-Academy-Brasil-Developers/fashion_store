import { BannerSection } from "../../components/sections/BannerSection";
import ProductsSection from "../../components/sections/ProductsSection";
import CartModal from "../../components/CartModal";
import { useProductsContext } from "../../providers/productsContext";
import { AnimatePresence } from "framer-motion";
import DefaultTemplate from "../../components/DefaultTemplate";

const Homepage = () => {
    const { modalVisible } = useProductsContext();

    return (
        <>
            <DefaultTemplate>
                <BannerSection />
                <ProductsSection />
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

export default Homepage;