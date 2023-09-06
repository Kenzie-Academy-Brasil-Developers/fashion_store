import { useState } from "react";
import { MdSearch } from "react-icons/md";
import styles from "./style.module.scss";

export const SearchForm = ({ setSearch }) => {
    const [value, setValue] = useState("");

    const submit = (e) => {
        e.preventDefault();
        setSearch(value);
        setValue("");
    };

    return (
        <form className={styles.form} onSubmit={submit}>
            <input
                className="paragraph"
                placeholder="O que você procura?"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">
                <MdSearch size={21} />
            </button>
        </form>
    );
};
