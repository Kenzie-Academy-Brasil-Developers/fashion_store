import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
// import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const navigate = useNavigate();

   const userRegister = async (formData, setLoading) => {
        try {
         setLoading(true);
         await api.post("/users", formData);
         navigate("/login");
        //  toast.success("Cadastro realizado com sucesso!");
      } catch (error) {
         console.log(error);
         if (error.response?.data === "Email already exists") {
            // toast.error("Usuário já cadastrado");
         }
      } finally {
         setLoading(false);
      }
   };


   return (
      <UserContext.Provider value={{ user, userRegister}}>
         {children}
      </UserContext.Provider>
   );
};