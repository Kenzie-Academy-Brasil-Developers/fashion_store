import { useState } from "react";
import { useProductsContext } from "../../../providers/productsContext";
import ProductList from "./ProductList"
import style from "./style.module.scss"

const ProductsSection = () => {
  const { products } = useProductsContext();
  const [search, setSearch] = useState("");

  const productsResult = products.filter((product) => {
    product.name.toLowerCase().includes(search.toLocaleLowerCase());

  });

  const productsResultFinal = search? productsResult : products;

    return(
        <section className={style.productsSection}>
            <h2 id="teste" className="title l">PRODUTOS EM DESTAQUE</h2>
            <ProductList products={products} />
        </section>
    )
}
