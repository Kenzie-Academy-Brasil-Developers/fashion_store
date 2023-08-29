import { useProductsContext } from "../../../../../pages/providers/productsContext";
import style from "./style.module.scss"

const ProductCard = ({ product, id, setProductsListToCard, productsListToCard }) => {
    const { handleSelectedProduct } = useProductsContext()

    const price = Number(product.price).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    });

    const addItemToCart = (product) =>{
        const add = product
        setProductsListToCard([...productsListToCard, add ])
    }

    return (
        <>
            <li className={style.productCard}>
                <div className={style.productInfos}>
                    <img src={product.image} onClick={() => handleSelectedProduct(id)} />
                    <h3 className="title sm">{product.name}</h3>
                    <span className="price sm">R$ {price}</span>
                </div>
                <div className={style.addToCart}>
                    <button className="addToCartButton" type="button" onClick={(()=> addItemToCart(product))}>
                        <span className="material-symbols-outlined">
                            add_shopping_cart
                        </span>
                    </button>
                    <p className="paragraph sm">SAIBA MAIS</p>
                </div>
            </li>
        </>
    );
}

export default ProductCard