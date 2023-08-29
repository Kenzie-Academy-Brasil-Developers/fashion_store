import { useProductsContext } from "../../../providers/productsContext";
import ProductList from "./ProductList"
import style from "./style.module.scss"

const ProductsSection = () => {
    const { products } = useProductsContext();


    return(
        <section className={style.productsSection}>
            <h2 className="title l">PRODUTOS EM DESTAQUE</h2>
            <ProductList products={products} />
        </section>
    )
}

export default ProductsSection