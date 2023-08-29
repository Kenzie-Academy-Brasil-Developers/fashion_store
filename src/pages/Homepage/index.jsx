import { BannerSection } from "../../components/BannerSection";
import { useState } from "react";
import ProductsSection from "../../components/sections/ProductsSection";
import CartModal from "../../components/CartModal";
import { DefaultTemplate } from "../../components/DefaultTemplate";

const Homepage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <DefaultTemplate setModalVisible={setModalVisible} >
        <BannerSection />
        <ProductsSection />
        {modalVisible ? <CartModal setModalVisible={setModalVisible} /> : null}
      </DefaultTemplate>
    </>
  );
};

export default Homepage;
