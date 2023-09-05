import { BannerSection } from "../../components/sections/BannerSection";
import ProductsSection from "../../components/sections/ProductsSection";
import CartModal from "../../components/CartModal";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { useProductsContext } from "../../providers/productsContext";

const Homepage = () => {
    const { modalVisible } = useProductsContext();

    return (
        <>
            <DefaultTemplate>
                <BannerSection />
                <ProductsSection />
                {modalVisible ? <CartModal /> : null}
            </DefaultTemplate>
        </>
    );
};

export default Homepage;
