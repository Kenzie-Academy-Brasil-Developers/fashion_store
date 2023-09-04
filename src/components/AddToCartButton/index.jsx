import { useProductsContext } from "../../providers/productsContext";

const AddToCartButton = ({ product, btnClass, children }) => {
    const { setProductsListToCard, productsListToCard } = useProductsContext();

    const addItemToCart = (product) => {
        const findItem = productsListToCard.find((i) => i.id === product.id);

        if (findItem) {
            findItem.amount += 1;
            setProductsListToCard([...productsListToCard]);
        } else {
            product.amount = 1;
            setProductsListToCard([...productsListToCard, product]);
        }
    };

    return (
        <>
            <button
                className={btnClass}
                type="button"
                onClick={() => addItemToCart(product)}
            >
                <span className="material-symbols-outlined">
                    add_shopping_cart
                </span>
                {children}
            </button>
        </>
    );
};

export default AddToCartButton;
