import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api.js"
import { useOutclick } from "../hooks/useOutclick.js";
import { useKeydown } from "../hooks/useKeydown.js";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProductsContext = createContext({})

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({})
    const [filteredProducts, setFilteredProducts] = useState([])
    const [productsListToCard, setProductsListToCard] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);


    // Painel Adm
    const [isOpen, setIsOpen] = useState(false)
    
    const [isOpenFIll, setIsOpenFill] = useState(false)

    const [modalFillObjc, setmodalFillObjc] = useState([])

    const [productId, setproductId] = useState([])

    function toastSuccess( message, time) {
        toast.success(message, {
            position: "top-right",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
                background: '#343B41',
                color: '#F8F9FA'
            }
        });
    }


    const modalRef = useOutclick(()=>{
        setIsOpen(false)
        setIsOpenFill(false)
    })

    const buttonRef= useKeydown('Escape',(element) =>{
        element.click()
    })

    const productsList = async () => {
        try { 
            const { data }  = await api.get("/products")
            setProducts(data)
        } catch (error) {
            console.log(error);            
        }
    }

    useEffect(() => {
        productsList()
    }, [])

    const delPost = async (productId) => {
        const token = localStorage.getItem('@TOKEN')
        try {
            const { data } = await api.delete(`/products/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            productsList()
            toastSuccess('Publicação deletada com sucesso !',2000)
        } catch (error) {
            console.log(error)
        }
    }

    const editProduct = (productId) => {
        setIsOpenFill(true)
        const newProducts = products.filter(product => product.id == productId)
        setmodalFillObjc(newProducts)
        setproductId(productId)
    }

    const delProduct = (productId) => {
        delPost(productId)
    }


    const { register, handleSubmit } = useForm()


    const createProduct = async (formData) => {
        const token = localStorage.getItem('@TOKEN')
        try {
            const { data } = await api.post('/products', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            toastSuccess('Publicação criada com sucesso !',2000)
            productsList()
        } catch (error) {
            console.log(error)
        }
    }

    const submitCreate = (formData) => {
        formData.price = Number(formData.price)
        setIsOpen(false)
        createProduct(formData)
    }



    const atualizarPublic = async (formData) => {
        const token = localStorage.getItem('@TOKEN')
        try {
            const { data } = await api.put(`/products/${productId}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            productsList()
            toastSuccess('Publicação editada !',2000)
        } catch (error) {
            console.log(error)
        }
    }


    const submitFill = (formData) => {
        formData.price = Number(formData.price)

        setmodalFillObjc(formData)
        if (formData.name == "") {
            formData.name = modalFillObjc[0].name
        }
        if (formData.price == "") {
            formData.price = modalFillObjc[0].price
        }
        if (formData.image == "") {
            formData.image = modalFillObjc[0].image
        }
        if (formData.description == "") {
            formData.description = modalFillObjc[0].description
        }

        atualizarPublic(formData)
        setIsOpenFill(false)
    }

    // /////////////////////////////////////////////////////

    const handleSelectedProduct = (id) => {
        window.scrollTo(0, 0)
        const selectedItem = products.find(item => item.id === Number(id))
        const filtered = products.filter(item => item.id !== Number(id))
        
        setSelectedProduct(selectedItem)
        setFilteredProducts(filtered)
    }

    return(
        <ProductsContext.Provider
            value={{
                products,
                handleSelectedProduct,
                selectedProduct,
                filteredProducts,
                productsListToCard,
                setProductsListToCard,
                setModalVisible,
                modalVisible,
                setIsOpen,
                isOpen,
                isOpenFIll,
                setIsOpenFill,
                modalRef,
                buttonRef,
                productsList,
                modalFillObjc,
                setmodalFillObjc,
                productId,
                setproductId,
                editProduct,
                delProduct,
                handleSubmit,
                submitCreate,
                register,
                submitFill
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider

export const useProductsContext = () => useContext(ProductsContext)