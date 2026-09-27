import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "antd";

const items = [
  { key: "/", label: <NavLink to="/">Home</NavLink> },
  { key: "/catalogo", label: <NavLink to="/catalogo">Catálogo</NavLink> },
];

export default function Navbar() {
  const { pathname } = useLocation();
  // en /catalogo/25 también se resalta "Catálogo"
  const activa = pathname.startsWith("/catalogo") ? "/catalogo" : "/";

  return <Menu mode="horizontal" selectedKeys={[activa]} items={items} style={{ flex: 1 }} />;
}
