import { Footer } from "../Footer";
import style from "./style.module.scss";

const DefaultPageAdmin = ({ children }) => {
    return (
        <>
            <header className={style.header}>
                <div className={`container`}>
                    <span className="title m">FASHIONSTORE</span>
                </div>
            </header>
            <main>
                <div className={`container`}>{children}</div>
            </main>
            <Footer />
        </>
    );
};

export default DefaultPageAdmin;
