import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"

export const RegisterForm = () => {
    const {register,handleSubmit} = useForm()
    return(
        <form>
            <Input/>
            <Input/>
            <InputPassword/>
            <InputPassword/>
        </form>
    )
}