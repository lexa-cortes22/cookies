import { createContext, useContext, useState } from "react";
import * as authService from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Login
  const login = async (email, password) => {
    try {
      const res = await authService.login(email, password);
      const userData = res.data.user;
      const token = res.data.token;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);
      // Puedes redirigir aquí si lo deseas
    } catch (err) {
      alert("Error al iniciar sesión");
    }
  };

  // Registro
  const register = async (email, password) => {
    try {
      const res = await authService.register(email, password);
      const userData = res.data.user;
      const token = res.data.token;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);
      // Puedes redirigir aquí si lo deseas
    } catch (err) {
      alert("Error al registrarse");
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}