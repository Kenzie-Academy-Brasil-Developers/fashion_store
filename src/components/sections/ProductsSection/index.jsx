import { useState } from "react";
import { useProductsContext } from "../../../providers/productsContext";
import ProductList from "./ProductList";
import style from "./style.module.scss";
import { SearchForm } from "../../Filter/SearchForm";

const ProductsSection = () => {
  const { products } = useProductsContext();
  const [search, setSearch] = useState("");

  const productsResult = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const productsResultFinal = search ? productsResult : products;

  return (
    <section className={style.productsSection}>
      {/* <Element name="target"> */}
      <div className={style.header}>
        <h2 id="teste" className="title l">
          PRODUTOS EM DESTAQUE
        </h2>
        <SearchForm setSearch={setSearch} />
      </div>
      {/* </Element> */}
      <ProductList
        products={products}
        search={search}
        productsResultFinal={productsResultFinal}
      />
    </section>
  );
};

export default ProductsSection;
