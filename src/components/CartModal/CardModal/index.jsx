import deleteSvg from "../../../assets/deleteItem.svg";
import style from "./style.module.scss";
const CardModal = ({ product, setProductsListToCard, productsListToCard, index }) => {
    const price = Number(product.price).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    });
    const removeItem = (idToRemove, indexToRemove) => {
        const newListProduct = productsListToCard.filter(
            (product, index) =>
                !(product.id === idToRemove && index === indexToRemove)
        );
        setProductsListToCard(newListProduct);
    };
    return (
        <>
                <li className={style.sc}>
                    <div className={style.card}>
                        <div>
                            <img src={product.image} alt={product.name} />
                            {/* <span className={style.nItem}>
                            </span> */}
                        </div>
                        <div className={style.infoCard}>
                            <span className="title sm">{product.name}</span>
                            <span className="price sm">{price}</span>
                        </div>
                    </div>
                    <img
                        src={deleteSvg}
                        alt="deletar"
                        onClick={() => removeItem(product.id, index)}
                    />
                </li>
        </>
    );
};

export default CardModal;
