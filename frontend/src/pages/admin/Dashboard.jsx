import SidebarAdmin from "../../components/SidebarAdmin";
export default function Dashboard() {
  return (
    <div>
      <SidebarAdmin />
      <main>
        <h2>Dashboard Admin</h2>
        <p>Resumen de ventas, inventario y pedidos.</p>
      </main>
    </div>
  );
}