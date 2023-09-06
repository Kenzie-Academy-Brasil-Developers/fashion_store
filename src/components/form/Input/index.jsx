import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(
    ({ error, type, autoComplete, ...rest }, ref) => {
        return (
            <div className={styles.inputBox}>
                <input
                    type={type}
                    className="inputDefault price m"
                    ref={ref}
                    autoComplete={autoComplete}
                    {...rest}
                />
                {error ? <p>{error.message}</p> : null}
            </div>
        );
    }
);

export const TextArea = forwardRef(({ error, autoComplete, ...rest }, ref) => {
    return (
        <div className={styles.textAreaBox} ref={ref}>
            <textarea className="price m" {...rest}></textarea>
            {error ? <p>{error.message}</p> : null}
        </div>
    );
});