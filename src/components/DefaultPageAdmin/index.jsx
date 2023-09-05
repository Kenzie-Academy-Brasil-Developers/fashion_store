import { useContext } from "react";
import { Footer } from "../Footer";
import style from "./style.module.scss"
import { UserContext } from "../../providers/userContext";
import {BiLogOut} from 'react-icons/bi'

const DefaultPageAdmin = ({ children }) => {
    const {userLogout } = useContext(UserContext);

    return (
        <>
            <header className={style.header}>
                <div className={`container`}>
                    <span className="title m">FASHIONSTORE</span>
                    <button className="btn outline" onClick={() => userLogout()}>
                     <BiLogOut size={21}/>
                  </button>
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
