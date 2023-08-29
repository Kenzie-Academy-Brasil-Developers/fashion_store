import { useProductsContext } from "../../../../pages/providers/productsContext";
import ProductCard from "./ProductCard";
import style from "./style.module.scss"

const ProductList = ({setItemCard, productsListToCard}) => {
    const { products } = useProductsContext();

    return (
        <>
            {products.length > 0 ? (
                <ul className={style.productList}>
                    {products.map((item) => (
                        <ProductCard 
                            id={item.id}
                            key={item.id} 
                            product={item}
                            setItemCard={setItemCard}
                            productsListToCard={productsListToCard}
                        />
                    ))}
                </ul>
            ) : null}
        </>
    );
};

export default ProductList;
