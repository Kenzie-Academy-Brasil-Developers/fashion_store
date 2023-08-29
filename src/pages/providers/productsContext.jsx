import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api.js"

const ProductsContext = createContext({})

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState({})
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)

    useEffect(() => {
        const productsList = async () => {
            try {
                const { data }  = await api.get("/products")
                setProducts(data)
            } catch (error) {
                console.log(error);            
            }
        }

        productsList()
    }, [])

    const handleSelectedProduct = (id) => {
        const selectedItem = products.find(item => item.id === Number(id))
        const filtered = products.filter(item => item.id !== Number(id))

        setSelectedProduct(selectedItem)
        setFilteredProducts(filtered)
    }

    console.log(selectedProduct);
    console.log(filteredProducts);

    return(
        <ProductsContext.Provider
            value={{
                products,
                handleSelectedProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider

export const useProductsContext = () => useContext(ProductsContext)