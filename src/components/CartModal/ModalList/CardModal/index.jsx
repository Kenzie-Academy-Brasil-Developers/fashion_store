import { useProductsContext } from "../../../../providers/productsContext";
import deleteSvg from "../../../../assets/deleteItem.svg";
import style from "./style.module.scss";
const CardModal = ({ product, index }) => {
    const { productsListToCard, setProductsListToCard } = useProductsContext();

    const price = Number(product.price).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    });

    const removeItem = (idToRemove, indexToRemove) => {
        if (product.amount > 1) {
            product.amount -= 1;
            setProductsListToCard([...productsListToCard]);
        } else {
            const newListProduct = productsListToCard.filter(
                (product, index) =>
                    !(product.id === idToRemove && index === indexToRemove)
            );
            setProductsListToCard(newListProduct);
        }
    };

    return (
        <>
            <li className={style.sc}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={style.card}
                >
                    <div>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className={style.infoCard}>
                        <span className="title sm">{product.name}</span>
                        <span className="price sm">{price}</span>
                    </div>
                </div>
                <span>{product.amount}</span>
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