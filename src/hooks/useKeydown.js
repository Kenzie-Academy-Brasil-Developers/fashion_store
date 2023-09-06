import { useEffect, useRef } from "react"

export const useKeydown =(keyid,callback)=>{
    const ref = useRef(null)

    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.key === keyid) {
                if(callback) callback(ref.current)
            }
        }

        window.addEventListener('keydown', handleKeydown)

        return () => {
            window.removeEventListener("keydown", handleKeydown)
        }
    }, [])

    return ref
}