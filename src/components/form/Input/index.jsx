import { forwardRef } from "react"
import styles from './style.module.scss'
export const Input = forwardRef(({error,type,...rest},ref)=>{
    return(
        <div>
            <input className={`price m ${styles.inputBox}`} ref={ref} {...rest}/>
            {error?<p>{error.message}</p>:null}
        
        </div>
    )
})