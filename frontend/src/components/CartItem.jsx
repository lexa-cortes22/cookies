export default function CartItem({ item }) {
  return (
    <div>
      <span>{item.name}</span> - <span>{item.quantity}</span> x <span>${item.price}</span>
    </div>
  );
}