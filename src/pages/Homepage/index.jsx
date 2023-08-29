import { useState } from "react"
import ProductsSection from "../../components/sections/ProductsSection"

const Homepage = () => {
    const [modalVisible, setVisible] = useState(false)
    return(
        <>
            <ProductsSection />
        </>
    )
}

export default Homepage