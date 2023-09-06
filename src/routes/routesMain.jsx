import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DetailedProduct from "../pages/DetailedProduct";
import { RegisterPage } from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import ProductsAdminPage from "../pages/ProductsAdminPage";

const RoutesMain = () => {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route path="/" element={<Homepage />} />
            <Route
                path="/:productName/:productId"
                element={<DetailedProduct />}
            />

            <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/products" element={<ProductsAdminPage />} />
            </Route>
        </Routes>
    );
};

export default RoutesMain;