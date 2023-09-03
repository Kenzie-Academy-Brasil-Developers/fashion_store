import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DetailedProduct from "../pages/DetailedProduct";
import { RegisterPage } from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import { AdminProtectedRoute, BuyProductsProtectedRoute } from "../components/ProtectedRoute";
import BuyPage from "../pages/BuyPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/:productName/:productId" element={<DetailedProduct />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin" element={<AdminProtectedRoute />}>
        <Route index element={<AdminPage />} />
      </Route>
      <Route path="/buy" element={<BuyProductsProtectedRoute />}>
          <Route index element={<BuyPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
