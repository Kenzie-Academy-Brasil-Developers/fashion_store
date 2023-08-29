import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import DetailedProduct from "../pages/DetailedProduct"
import {RegisterPage} from '../pages/RegisterPage'

const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={""} />
            <Route path="/:productName/:productId" element={<DetailedProduct />}/>
            <Route path="/register" element={<RegisterPage/>} />
        </Routes>
    )
}

export default RoutesMain