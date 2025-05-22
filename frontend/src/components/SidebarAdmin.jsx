import { Link } from "react-router-dom";
export default function SidebarAdmin() {
  return (
    <aside>
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/products">Productos</Link></li>
        <li><Link to="/admin/orders">Pedidos</Link></li>
        <li><Link to="/admin/inventory">Inventario</Link></li>
        <li><Link to="/admin/clients">Clientes</Link></li>
      </ul>
    </aside>
  );
}