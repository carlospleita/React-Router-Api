import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Detalle from "./pages/Detalle.jsx";
import NotFound from "./pages/NotFound.jsx";

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#ffffff", padding: "0 16px", display: "flex" }}>
        <Navbar />
      </Header>

      <Content style={{ padding: 16, maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:id" element={<Detalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>

      <Footer style={{ textAlign: "center" }}>Catálogo de Pokémon — React Router + Api</Footer>
    </Layout>
  );
}
