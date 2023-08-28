import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api.js"

const ProductsContext = createContext({})

const ProductsProvider = ({ children }) => {
    
    useEffect(() => {
        const productsList = async () => {
            try {
                const { data }  = await api.get("/products")
                console.log(data);
            } catch (error) {
                console.log(error);            
            }
        }

        productsList()
    }, [])

    return(
        <ProductsContext.Provider
            value={{

            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider

export const useProducts = () => useContext(ProductsContext)