import ProductList from "./ProductList"
import style from "./style.module.scss"

const ProductsSection = () => {
    return(
        <section className={style.productsSection}>
            <h2 className="title l">PRODUTOS EM DESTAQUE</h2>
            <ProductList />
        </section>
    )
}

export default ProductsSection