import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  // Si no hay usuario autenticado, redirige a login
  if (!user) return <Navigate to="/login" replace />;

  // Si se requiere un rol y el usuario no lo tiene, redirige a home
  if (role && user.role !== role) return <Navigate to="/" replace />;

  // Si todo está bien, muestra el contenido protegido
  return children;
}