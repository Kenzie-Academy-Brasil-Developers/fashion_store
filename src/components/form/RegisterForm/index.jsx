import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(registerFormSchema),
  });
  const [loading, setLoading] = useState(false);

  const { userRegister } = useContext(UserContext);

  const submit = (formData) => {
    userRegister(formData, setLoading);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        disable={loading}
        type="text"
        {...register("name")}
        error={errors.name}
        placeholder="NOME"
      />

      <Input
        disable={loading}
        type="text"
        {...register("email")}
        error={errors.email}
        placeholder="E-MAIL"
      />
      <InputPassword
        disable={loading}
        {...register("password")}
        error={errors.password}
        placeholder="SENHA"
      />
      <InputPassword
        disable={loading}
        {...register("confirmPassword")}
        error={errors.confirmPassword}
        placeholder="CONFIRMAR SENHA"
      />
      <button
        type='submit'
      >
        {loading ? "Cadastrando..." : "CADASTRAR-SE"}
      </button>
    </form>
  );
};
