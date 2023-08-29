import { Link } from "react-router-dom";
import { useProductsContext } from "../../../../../providers/productsContext";
import style from "./style.module.scss"
import AddToCartButton from "../../../../AddToCartButton";

const ProductCard = ({ product, id }) => {
    const { handleSelectedProduct } = useProductsContext()

    const price = Number(product.price).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    });

    return (
        <>
            <li className={style.productCard}>
                <div className={style.productInfos}>
                    <Link to={`/${product.name}/${id}`}>
                        <img src={product.image} onClick={() => handleSelectedProduct(id)} />
                    </Link>
                    <h3 className="title sm">{product.name}</h3>
                    <span className="price sm">R$ {price}</span>
                </div>
                <div className={style.addToCart}>
                    <AddToCartButton product={product} btnClass={"addToCartButton"} />
                    <p className="paragraph sm">SAIBA MAIS</p>
                </div>
            </li>
        </>
    );
}

export default ProductCard