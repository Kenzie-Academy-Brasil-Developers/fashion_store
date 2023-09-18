import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api.js";
import { toast } from "react-toastify";
import { ToastSuccess } from "../components/Toasts/index.jsx";

const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [productsListToCard, setProductsListToCard] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [productId, setProductId] = useState(null);

    const productsList = async () => {
        try {
            const { data } = await api.get("/products");
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        productsList();
    }, []);

    const addProduct = async (formData, setIsLoading) => {
        try {
            setIsLoading(true);
            const token = localStorage.getItem("@TOKEN");
            const { data } = await api.post("/products", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAddModalVisible(false);
            setProducts([...products, data]);
            ToastSuccess("Produto adicionado");
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteProduct = async (deletingId) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            await api.delete(`/products/${deletingId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const newProductList = products.filter(
                (product) => product.id !== deletingId
            );
            setProducts(newProductList);
            setProductId(null);
        } catch (error) {}
    };

    const editProduct = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const { data } = await api.put(`/products/${productId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const productIndex = products.findIndex((x) => x.id === productId);

            const updatedProductsList = [...products];
            updatedProductsList[productIndex] = data;

            setProductId(null);
            setProducts(updatedProductsList);
            setEditModalVisible(false);
        } catch (error) {}
    };

    const handleSelectedProduct = (id) => {
        window.scrollTo(0, 0);
        const selectedItem = products.find((item) => item.id === Number(id));
        const filtered = products.filter((item) => item.id !== Number(id));

        setSelectedProduct(selectedItem);
        setFilteredProducts(filtered);
    };

    return (
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
                addProduct,
                deleteProduct,
                editProduct,
                addModalVisible,
                setAddModalVisible,
                editModalVisible,
                setEditModalVisible,
                deleteModal,
                setDeleteModal,
                setProductId,
                productId,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;

export const useProductsContext = () => useContext(ProductsContext);