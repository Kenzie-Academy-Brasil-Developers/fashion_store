import cartIcon from "../../assets/cartIcon.png"
import styles from "./style.module.scss"

export const Header = ({setModalVisible}) =>{
    
    return (
        <header className={styles.headerStyle}>
            <span className="title m">FASHIONSTORE</span>
            <button onClick={(()=> setModalVisible(true))}>
                <img src={cartIcon} alt="Shopping cart button" />
            </button>
        </header>
    )
}