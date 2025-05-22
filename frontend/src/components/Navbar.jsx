import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link className="navbar-logo" to="/">🍪 Galletas Artesanales</Link>
        <Link to="/shop">Tienda</Link>
        <Link to="/cart">Carrito</Link>
        {user && user.role === "admin" && <Link to="/admin">Admin</Link>}
      </div>
      <div className="navbar-right">
        {user ? (
          <>
            <span className="navbar-user">Hola, {user.email}</span>
            <button className="navbar-logout" onClick={logout}>Salir</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registro</Link>
          </>
        )}
      </div>
    </nav>
  );
}