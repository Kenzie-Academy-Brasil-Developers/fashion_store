import ProductCard from "./ProductCard";
import style from "./style.module.scss"

const ProductList = ({ products }) => {
    return (
        <>
            {products.length > 0 ? (
                <ul className={style.productList}>
                    {products.map((item) => (
                        <ProductCard
                            id={item.id}
                            key={item.id}
                            product={item}
                        />
                    ))}
                </ul>
            ) : null}
        </>
    );
};

export default ProductList;
