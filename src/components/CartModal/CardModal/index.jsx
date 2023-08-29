import deleteSvg from "../../../assets/deleteItem.svg";
import style from "./style.module.scss";
const CardModal = () => {
    return (
        <>
            <section className={style.sc}>
                <div className={style.card}>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div className={style.infoCard}>
                        <span className="title sm">Blazer Branco Elegante</span>
                        <span className="price sm">R$ 320,00 </span>
                    </div>
                </div>
                <img src={deleteSvg} alt="" />
            </section>
        </>
    );
};

export default CardModal;
