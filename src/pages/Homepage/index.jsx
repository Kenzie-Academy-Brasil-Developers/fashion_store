import { useState } from "react";
import ProductsSection from "../../components/sections/ProductsSection";
import CartModal from "../../components/CartModal";
import { useParams } from "react-router";

const Homepage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <>
            <ProductsSection />
            <button type="button" onClick={() => setModalVisible(true)}>
                abrirModal
            </button>

            {modalVisible ? (
                <CartModal
                    setModalVisible={setModalVisible} />
            ) : null}
        </>
    );
};

export default Homepage;
