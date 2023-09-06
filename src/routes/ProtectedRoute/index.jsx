import { useUserContext } from "../../providers/userContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const { user } = useUserContext();

    return user ? <Outlet /> : <Navigate to="/" />;
};