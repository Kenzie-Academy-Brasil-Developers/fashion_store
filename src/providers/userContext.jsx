import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { ToastError, ToastSuccess } from "../components/Toasts";
const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const userRegister = async (formData, setLoading) => {
        try {
            setLoading(true);
            await api.post("/users", formData);
            navigate("/login");
            ToastSuccess("Cadastro realizado com sucesso!");
        } catch (error) {
            if (error.response?.data === "Email already exists") {
                ToastError("Usuário já cadastrado");
            }
        } finally {
            setLoading(false);
        }
    };

    const userLogin = async (formData) => {
        try {
          const { data } = await api.post("/login", formData);
          localStorage.setItem("@TOKEN", data.accessToken);
          setUser(data.user);
          ToastSuccess("Logado com sucesso")
          navigate("/admin");
        } catch (error) {
            if (
                error.response?.data === "Incorrect password" ||
                error.response?.data === "Cannot find user"
            ) {
                ToastError("E-mail e/ou senha incorretos");
            }
        }
      };
    
    return (
        <UserContext.Provider value={{ user, userRegister, userLogin }}>
            {children}
        </UserContext.Provider>
    );
};
