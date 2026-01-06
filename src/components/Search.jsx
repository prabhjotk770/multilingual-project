import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchProducts } from "../mock/products";
import ProductList from "./ProductList";

export default function Search() {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  // fetch once
  useEffect(() => {
    fetchProducts().then((data) => {
      setAllProducts(data);
      setProducts(data);
    });
  }, []);

  // filter on query OR language change
  useEffect(() => {
    const filtered = allProducts.filter((p) =>
      t(p.titleKey).toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  }, [query, i18n.language, allProducts, t]);

  return (
    <main className="container my-5">
      <div className="row mb-4">
        <div className="col-md-12">
          <input
            className="form-control"
            placeholder={t("searchPlaceholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <ProductList products={products} />
    </main>
  );
}
