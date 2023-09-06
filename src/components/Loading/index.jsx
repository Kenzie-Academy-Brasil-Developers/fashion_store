import LoadingIcon from "../../assets/LoadingIcon.svg";
import styles from "./styles.module.scss";
export const Loading = () => {
  
    return (
        <div className={styles.loadingBox}>
            <img src={LoadingIcon} alt="Carregando" />
        </div>
    );
};