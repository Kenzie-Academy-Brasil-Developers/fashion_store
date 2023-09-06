import { useUserContext } from "../../providers/userContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
    const { user } = useUserContext();

    return !user ? <Outlet /> : <Navigate to="/admin" />;
};
