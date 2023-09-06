import { BannerSection } from "../../components/sections/BannerSection";
import ProductsSection from "../../components/sections/ProductsSection";
import CartModal from "../../components/CartModal";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { useProductsContext } from "../../providers/productsContext";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
