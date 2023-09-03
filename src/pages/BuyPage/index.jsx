import { useState } from "react";
import CardModal from "../../components/CartModal/CardModal";
import DefaultPageAdmin from "../../components/DefaultPageAdmin";
import { useProductsContext } from "../../providers/productsContext";
import { MdPix } from "react-icons/md"
import style from "./style.module.scss";

const BuyPage = () => {
    const { productsListToCard } = useProductsContext();
    const [paymentForm, setPaymentForm] = useState(false)

    const value = productsListToCard.reduce(
        (total, currentProduct) =>
            total + currentProduct.price * currentProduct.amount,
        0
    );

    const price = Number(value).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    });

    return (
        <>
            <DefaultPageAdmin>
                <section className={style.buySection}>
                    <div className={style.shoppingCart}>
                        <ul className={style.list}>
                            {productsListToCard.map((product, index) => (
                                <CardModal
                                    key={`${product.id}_${index}`}
                                    product={product}
                                    index={index}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className={style.finishBuy}>
                        <h2 className="title m">RESUMO</h2>
                        <div className={style.price}>
                            <p className="price sm">
                                TOTAL:{" "}
                                <span className="price sm bold">R$ {price}</span>
                            </p>
                        </div>
                    </div>
                </section>
            </DefaultPageAdmin>
        </>
    );
};

                            // <span class="material-symbols-outlined">
                            //     credit_card
                            // </span>
                            // <MdPix />
export default BuyPage;
