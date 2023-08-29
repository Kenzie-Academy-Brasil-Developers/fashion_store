import { useParams } from "react-router"
import { useProductsContext } from "../providers/productsContext"
import { Link } from "react-router-dom"
import ProductList from "../../components/sections/ProductsSection/ProductList"
import { useEffect } from "react"
import DetailedProductSection from "../../components/sections/DetailedProductSection"

const DetailedProduct = () => {
    const { selectedProduct, filteredProducts, handleSelectedProduct, products } = useProductsContext()
    const { productId } = useParams()

    useEffect(() => {
        if(products.length > 0) {
            handleSelectedProduct(productId)
        }
    }, [products])

    return (
        <>
            <DetailedProductSection selectedProduct={selectedProduct} >
                <ProductList products={filteredProducts}/>
            </DetailedProductSection>
        </>
    );
}

export default DetailedProduct