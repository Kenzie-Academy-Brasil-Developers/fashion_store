import ProductCard from "./ProductCard";
import style from "./style.module.scss"

const ProductList = ({ productsResultFinal}) => {

    return (
        <>
            {productsResultFinal.length > 0 ? (
                <ul className={style.productList}>
                    {productsResultFinal.map((item) => (
                        <ProductCard 
                            id={item.id}
                            key={item.id} 
                            product={item}
                        />
                    ))}
                </ul>
            ) : (
                <p>Nenhum resultado encontrado</p>
            )}
        </>
    );
};

export default ProductList;