import bannerImg from "../../../assets/banner.png"
import styles from "./style.module.scss"

export const BannerSection = () =>{
    return (
            <section className={styles.bannerStyle}>
                <div className={styles.bannerImg}>
                    <img src={bannerImg} />
                </div>
                <div className={styles.pageTitle}>
                    <h1 className="title xl">
                        KENZIE FASHION STORE
                    </h1>
                    <a href="#teste">
                        <span className={`${styles.bannerSpan} breadcrumbs`}>CONFIRA AS OFERTAS</span>
                    </a>
                </div>
            </section>
    )
}