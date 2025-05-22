export default function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
}