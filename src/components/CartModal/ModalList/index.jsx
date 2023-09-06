import { useProductsContext } from "../../../providers/productsContext";
import style from "../style.module.scss";
import CardModal from "./CardModal";

const ModalList = () => {
    const { productsListToCard } = useProductsContext();

    return (
        <>
            {productsListToCard.length > 0 ? (
                <>
                    <ul className={style.list}>
                        {productsListToCard.map((product, index) => (
                            <CardModal
                                key={`${product.id}_${index}`}
                                product={product}
                                index={index}
                            />
                        ))}
                    </ul>
                </>
            ) : (
                <span>Sem items no carrinho</span>
            )}
        </>
    );
};

export default ModalList;