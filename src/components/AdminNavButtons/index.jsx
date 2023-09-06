import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const AdminNavButtons = () => {
    return (
        <>
            <nav className={styles.adminNav}>
                <Link className="menu" to={"/admin"}>
                    INÍCIO
                </Link>
                <Link className="menu" to={"/admin/products"}>
                    PRODUTOS
                </Link>
            </nav>
        </>
    );
};

export default AdminNavButtons;