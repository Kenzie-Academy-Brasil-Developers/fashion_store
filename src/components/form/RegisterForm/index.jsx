import { useForm } from "react-hook-form"

export const RegisterForm = () => {
    const {register,handleSubmit} = useForm()
    return(
        <form>
            <Input/>
        </form>
    )
}