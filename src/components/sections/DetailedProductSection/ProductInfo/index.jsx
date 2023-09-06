import AddToCartButton from "../../../AddToCartButton";
import style from "./style.module.scss";

const ProductInfoCard = ({ product }) => {
    const price = Number(product.price).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    });

    return (
        <>
            <div className={style.imageContainer}>
                <img src={product.image} />
            </div>
            <div className={style.infosContainer}>
                <h3 className="title selected">{product.name}</h3>
                <span className="price l">R$ {price}</span>
                <p className="paragraph">{product.description}</p>
                <AddToCartButton
                    product={product}
                    btnClass={"addToCartButton l breadcrumbs"}
                >
                    ADICIONAR AO CARRINHO
                </AddToCartButton>
            </div>
        </>
    );
};

export default ProductInfoCard;