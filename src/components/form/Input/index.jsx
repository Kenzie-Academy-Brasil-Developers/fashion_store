export const Input = forwardRef({error,type,...rest},ref)=>{
    return(
        <div>
            <input ref={ref} {...rest}/>
            {error?<p>{error.message}</p>:null}
        
        </div>
    )
}