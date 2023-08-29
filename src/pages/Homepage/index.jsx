import { BannerSection } from "../../components/BannerSection";
import { DefaultTemplate } from "../../components/defaultTemplate";

import { useState } from "react";
import ProductsSection from "../../components/sections/ProductsSection";
import CartModal from "../../components/CartModal";

const Homepage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <DefaultTemplate>
        <BannerSection />
        <ProductsSection />
        {modalVisible ? <CartModal setModalVisible={setModalVisible} /> : null}
      </DefaultTemplate>
    </>
  );
};

export default Homepage;
