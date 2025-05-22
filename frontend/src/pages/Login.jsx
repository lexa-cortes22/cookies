import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  );
}