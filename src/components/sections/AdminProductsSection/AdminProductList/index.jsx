import AdminProductCard from "./AdminProductCard";
import style from "./style.module.scss";

const AdminProductList = ({ products }) => {
    return (
        <>
            {products.length > 0 ? (
                <ul className={style.productList}>
                    {products.map((item) => (
                        <AdminProductCard key={item.id} product={item} />
                    ))}
                </ul>
            ) : null}
        </>
    );
};

export default AdminProductList;