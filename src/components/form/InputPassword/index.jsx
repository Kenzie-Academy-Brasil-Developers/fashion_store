import { useState } from "react"
import { MdVisibility,MdVisibilityOff } from "react-icons/md"

export const InputPassword = forwardRef({error,type,...rest},ref)=>{
    const [isHidden, setIsHidden] = useState(true)
    return(
        <div>
            <div>
                <input type={isHidden?'password': 'text'}ref={ref} {...rest}/>
                <button type='button' onClick={()=>setIsHidden(!isHidden)}>
                    {isHidden?<MdVisibility/>:<MdVisibility/>}
                </button>
            </div>
            {error?<p>{error.message}</p>:null}
        </div>
    )
}