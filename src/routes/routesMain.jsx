import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import DetailedProduct from "../pages/DetailedProduct"

const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={""} />
            <Route path="/register" element={""} />
            <Route path="/:productName/:productId" element={<DetailedProduct />}/>
        </Routes>
    )
}

export default RoutesMain