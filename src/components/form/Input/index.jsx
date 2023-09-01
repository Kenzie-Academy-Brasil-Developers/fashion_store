import { forwardRef } from "react"
import styles from './style.module.scss'

export const Input = forwardRef(({error,type,...rest},ref)=>{
    return(
        <div className={styles.inputBox}>
            <input className='inputDefault price m' ref={ref} {...rest}/>
            {error?<p>{error.message}</p>:null}
        </div>
    )
})