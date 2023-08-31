import { Footer } from "../Footer";
import style from "./style.module.scss"
const DefaultPageAdmin = ({ children }) => {
    return (
        <div className={`container ${style.container}`}>
            <header className={style.header}><span className="title m">FASHIONSTORE</span></header>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default DefaultPageAdmin
