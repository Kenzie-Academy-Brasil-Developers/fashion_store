import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductsProvider from "./pages/providers/productsContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <ProductsProvider>
          <App />
        </ProductsProvider>        
      </BrowserRouter>
    </React.StrictMode>
);
