import bannerImg from "../../../assets/banner.png";
import styles from "./style.module.scss";
import { Link } from "react-scroll";

export const BannerSection = () => {
    return (
        <section className={styles.bannerStyle}>
            <div className={styles.bannerImg}>
                <img src={bannerImg} />
            </div>
            <div className={styles.pageTitle}>
                <h1 className="title xl">KENZIE FASHION STORE</h1>
                <Link
                    activeClass="active"
                    to="target"
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    ignoreCancelEvents={true}
                >
                    <span className={`${styles.bannerSpan} breadcrumbs`}>
                        CONFIRA AS OFERTAS
                    </span>
                </Link>
            </div>
        </section>
    );
};