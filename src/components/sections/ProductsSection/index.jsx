import { useProductsContext } from "../../../providers/productsContext";
import ProductList from "./ProductList"
import style from "./style.module.scss"
import { Element } from "react-scroll";

const ProductsSection = () => {
    const { products } = useProductsContext();

    return(
        <section className={style.productsSection}>
            <Element name="target">
                <h2 className="title l">PRODUTOS EM DESTAQUE</h2>
            </Element>
            <ProductList products={products} />
        </section>
    )
}

export default ProductsSection