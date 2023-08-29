import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import {RegisterPage} from '../pages/RegisterPage'

const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={""} />
            <Route path="/register" element={<RegisterPage/>} />
        </Routes>
    )
}

export default RoutesMain