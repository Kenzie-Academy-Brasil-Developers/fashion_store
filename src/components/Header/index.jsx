import { Link } from "react-router-dom";
import cartIcon from "../../assets/cartIcon.png";
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
                <button onClick={() => setModalVisible(true)}>
                    <img src={cartIcon} alt="Shopping cart button" />
                </button>
            </div>
        </header>
    );
};
