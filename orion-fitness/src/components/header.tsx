import { Link, useLocation } from "react-router-dom";
import "../css/header.css";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <h1 className="logo">🌐 Meu Site</h1>
      <nav className="nav">
        <Link to="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/sobre" className={pathname === "/sobre" ? "active" : ""}>Sobre</Link>
        <Link to="/produtos" className={pathname === "/produtos" ? "active" : ""}>Produtos</Link>
        <Link to="/admin" className={pathname === "/admin" ? "active" : ""}>admin</Link>
      </nav>
    </header>
  );
}
