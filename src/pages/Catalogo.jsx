import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Row, Col, Card, Input, Spin, Alert, Empty, Button } from "antd";
import { getItems } from "../services/api.js";

export default function Catalogo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const buscar = searchParams.get("buscar") ?? "";

  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [intento, setIntento] = useState(0); // cambia al tocar "Reintentar"

  useEffect(() => {
    async function cargar() {
      setCargando(true);
      setError(false);
      try {
        setItems(await getItems(buscar));
      } catch {
        setError(true);
      }
      setCargando(false);
    }
    cargar();
  }, [buscar, intento]);

  function handleBuscar(valor) {
    setSearchParams(valor ? { buscar: valor } : {});
  }

  let contenido;
  if (cargando) {
    contenido = <Spin size="large" style={{ display: "block", margin: 48 }} />;
  } else if (error) {
    contenido = (
      <Alert
        type="error"
        title="No pudimos cargar el catálogo"
        action={<Button onClick={() => setIntento(intento + 1)}>Reintentar</Button>}
      />
    );
  } else if (items.length === 0) {
    contenido = <Empty description="No hay resultados" />;
  } else {
    contenido = (
      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/catalogo/${item.id}`}>
              <Card hoverable cover={<img alt={item.name} src={item.image} />} title={item.name} />
            </Link>
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <>
      <h2>Catálogo</h2>
      {/* key={buscar}: si cambia la URL, el input se actualiza con el valor nuevo */}
      <Input.Search
        key={buscar}
        defaultValue={buscar}
        placeholder="Buscar por nombre..."
        onSearch={handleBuscar}
        allowClear
        enterButton
        style={{ maxWidth: 400, marginBottom: 24 }}
      />
      {contenido}
    </>
  );
}
