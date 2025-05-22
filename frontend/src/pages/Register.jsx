import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const handleSubmit = e => {
    e.preventDefault();
    register(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear cuenta</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Registrarse</button>
    </form>
  );
}