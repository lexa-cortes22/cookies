import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
export default function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div>
      <h2>Tienda</h2>
      <div>
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}