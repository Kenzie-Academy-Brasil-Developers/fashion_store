import { useProductsContext } from "../../pages/providers/productsContext"

const AddToCartButton = ({ product, btnClass, children }) => {
    const { setProductsListToCard, productsListToCard } = useProductsContext()

    const addItemToCart = (product) =>{
        const add = product
        setProductsListToCard([...productsListToCard, add ])
    }

    return(
        <>
            <button className={btnClass} type="button" onClick={(()=> addItemToCart(product))}>
                <span className="material-symbols-outlined">
                    add_shopping_cart
                </span>
                {children}
            </button>
        </>
    )
}

export default AddToCartButton