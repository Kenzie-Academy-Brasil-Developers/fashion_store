import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DetailedProduct from "../pages/DetailedProduct";
import { RegisterPage } from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoute/>}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/" element={<Homepage />} />
      <Route path="/:productName/:productId" element={<DetailedProduct />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/admin"  element={<AdminPage />} />
      </Route>

    </Routes>
  );
};

export default RoutesMain;
