import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const userRegister = async (formData, setLoading) => {
        try {
            setLoading(true);
            await api.post("/users", formData);
            navigate("/login");
            toast.success("Cadastro realizado com sucesso!");
        } catch (error) {
            if (error.response?.data === "Email already exists") {
                toast.error("Usuário já cadastrado");
            }
        } finally {
            setLoading(false);
        }
    };

    const userLogin = async (formData) =>{
        try {
            const {data} = await api.post("/login", formData)
            toast.success("Logado com sucesso")
            console.log(data)
        } catch (error) {
            if (error.response?.data === "Incorrect password" ||error.response?.data ==="Cannot find user") {
                toast.error("E-mail e/ou senha incorretos");
            }
            
        }
    }
    
    return (
        <UserContext.Provider value={{ user, userRegister, userLogin }}>
            {children}
        </UserContext.Provider>
    );
};
