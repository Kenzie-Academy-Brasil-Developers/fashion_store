import { useState } from "react"
import ProductsSection from "../../components/sections/ProductsSection"

const Homepage = () => {
    const [modalVisible, setVisible] = useState(false)
    const [productsListToCard, setItemCard] = useState([])
    return(
        <>
            <ProductsSection  setItemCard={setItemCard} productsListToCard={productsListToCard}/>
        </>
    )
}

export default Homepage