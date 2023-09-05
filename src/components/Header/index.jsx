import { Link } from "react-router-dom";
import cartIcon from "../../assets/cartIcon.png";
import {BsSearch} from 'react-icons/bs'
import { useProductsContext } from "../../providers/productsContext";
import styles from "./style.module.scss";

export const Header = () => {
    const { setModalVisible } = useProductsContext();

    return (
        <header className={styles.headerStyle}>
            <div className="container">
                <Link to={"/"} className="title m">
                    FASHIONSTORE
                </Link>
                <div>
                    <a href="#teste">
                        <span className={`${styles.bannerSpan} breadcrumbs`}><BsSearch size={30}/></span>
                    </a>
                    <button onClick={() => setModalVisible(true)}>
                        <img src={cartIcon} alt="Shopping cart button" />
                    </button>

                </div>
            </div>
        </header>
    );
};
