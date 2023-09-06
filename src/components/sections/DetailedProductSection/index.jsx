import { Link, useParams } from "react-router-dom";
import ProductInfoCard from "./ProductInfo";
import style from "./style.module.scss";

const DetailedProductSection = ({ children, selectedProduct }) => {
    const { productName, productId } = useParams();

    return (
        <section className={style.detailedProductSection}>
            <div className={`${style.toHomeContainer} menu sm`}>
                <Link style={{ color: "var(--color-black)" }} to={"/"}>
                    Home {">"}
                </Link>
                <p>{productName}</p>
            </div>
            <div className={style.cardContainer}>
                <ProductInfoCard product={selectedProduct} />
            </div>
            <h2 className="title l">VEJA TAMBÉM</h2>
            {children}
        </section>
    );
};

export default DetailedProductSection;