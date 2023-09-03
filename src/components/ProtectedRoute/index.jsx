import { useContext } from "react"
import { UserContext } from "../../providers/userContext"
import { Navigate, Outlet } from "react-router-dom"
import { useProductsContext } from "../../providers/productsContext"

export const AdminProtectedRoute = () => {
    const { user } = useContext(UserContext)

    return user ? <Outlet /> : <Navigate to="/" />
}

export const BuyProductsProtectedRoute = () => {
    const { productsListToCard } = useProductsContext()

    return productsListToCard.length > 0 ? <Outlet /> : <Navigate to={"/"} />
}