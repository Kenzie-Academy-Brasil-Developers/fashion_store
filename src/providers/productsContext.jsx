import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api.js";
import { toast } from "react-toastify";

const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productsListToCard, setProductsListToCard] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

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

  const addProduct = async (formData) => {
    try {
      const token = localStorage.getItem('@TOKEN')
;
      const { data } = await api.post("/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAddModalVisible(false);
      setProducts([...products, data]);

      toast.success("Produto adicionado");
    } catch (error) {
      console.log(error);
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
    } catch (error) {}
  };

  const editProduct = async (formData) => {
    const newProduct = {
      name: formData.name,
      price: formData.price,
      description: formData.description,
      image: formData.image,
    };
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.put(
        `/products/${editingProduct.id}`,
        newProduct,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newProductList = products.map((product) => {
        if (product.id === editingProduct.id) {
          return data;
        } else {
          return product;
        }
      });
      setProducts(newProductList);
      setEditingProduct(null);
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
        editingProduct,
        setEditingProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProductsContext = () => useContext(ProductsContext);
