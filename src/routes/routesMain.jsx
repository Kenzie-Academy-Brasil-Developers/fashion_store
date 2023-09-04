import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DetailedProduct from "../pages/DetailedProduct";
import { RegisterPage } from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import { ProtectedRoute } from "./ProtectedRoute";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/:productName/:productId" element={<DetailedProduct />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/admin"  element={<AdminPage />} />
      </Route>

    </Routes>
  );
};

export default RoutesMain;
