import { useState } from "react";
import ProductsSection from "../../components/sections/ProductsSection";
import CartModal from "../../components/CartModal";

const Homepage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [productsListToCard, setProductsListToCard] = useState([]);
    return (
        <>
            <ProductsSection
                setProductsListToCard={setProductsListToCard}
                productsListToCard={productsListToCard}
            />
            <button type="button" onClick={() => setModalVisible(true)}>
                abrirModal
            </button>

            {modalVisible ? (
                <CartModal
                    setModalVisible={setModalVisible}
                    setProductsListToCard={setProductsListToCard}
                    productsListToCard={productsListToCard}
                />
            ) : null}
        </>
    );
};

export default Homepage;
