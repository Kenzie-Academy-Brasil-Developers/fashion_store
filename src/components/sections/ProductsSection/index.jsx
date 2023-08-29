import ProductList from "./ProductList"
import style from "./style.module.scss"

const ProductsSection = ({setItemCard, productsListToCard}) => {
    return(
        <section className={style.productsSection}>
            <h2 className="title l">PRODUTOS EM DESTAQUE</h2>
            <ProductList setItemCard={setItemCard} productsListToCard={productsListToCard} />
        </section>
    )
}

export default ProductsSection