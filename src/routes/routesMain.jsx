import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DetailedProduct from "../pages/DetailedProduct";
import { RegisterPage } from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import { ProtectedRoute } from "../components/ProtectedRoute";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/:productName/:productId" element={<DetailedProduct />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/admin" element={<ProtectedRoute />}>
        <Route index element={<AdminPage />} />
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