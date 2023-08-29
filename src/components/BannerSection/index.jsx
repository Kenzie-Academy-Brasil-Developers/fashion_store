import bannerImg from "../../assets/banner.png"
import styles from "./style.module.scss"

export const BannerSection = () =>{
    return (
        <section className={styles.bannerStyle}>
            <img src={bannerImg} className={styles.bannerImg}/>
            <div>
                <h1 className="title xl">
                    KENZIE FASHION STORE
                </h1>
                <span className={`${styles.bannerSpan} breadcrumbs`}>CONFIRA AS OFERTAS</span>
            </div>
        </section>
    )
}