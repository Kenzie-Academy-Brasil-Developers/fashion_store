import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { ToastError, ToastSuccess } from "../components/Toasts";
const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const pathname = window.location.pathname;

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@TOKEN");
            const userId = localStorage.getItem("@USERID");

            if (token && userId) {
                try {
                    setLoading(true);
                    const { data } = await api.get(`/users/${userId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUser(data);
                    navigate(pathname);
                } catch (error) {
                    localStorage.removeItem("@TOKEN");
                    localStorage.removeItem("@USERID");
                } finally {
                    setLoading(false);
                }
            }
        };
        loadUser();
    }, []);

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
            localStorage.setItem("@USERID", data.user.id);
            setUser(data.user);
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
    const userLogout = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
    };

    return (
        <UserContext.Provider
            value={{ userLogout, user, userRegister, userLogin, loading }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);