import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./style.module.scss";

export const InputPassword = forwardRef(
    ({ error, type, autoComplete, ...rest }, ref) => {
        const [isHidden, setIsHidden] = useState(true);

        return (
            <div className={styles.inputBox}>
                <input
                    autoComplete={autoComplete}
                    className="inputDefault price m "
                    type={isHidden ? "password" : "text"}
                    ref={ref}
                    {...rest}
                />
                <button
                    className={styles.buttonEye}
                    type="button"
                    onClick={() => setIsHidden(!isHidden)}
                >
                    {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
                </button>
                {error ? <p className="paragraph sm">{error.message}</p> : null}
            </div>
        );
    }
);