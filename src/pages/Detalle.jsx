import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Descriptions, Skeleton, Alert, Result, Button } from "antd";
import { getItemById } from "../services/api.js";

export default function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [intento, setIntento] = useState(0); // cambia al tocar "Reintentar"

  // se vuelve a ejecutar si cambia el id en la URL
  useEffect(() => {
    async function cargar() {
      setCargando(true);
      setError(null);
      try {
        setItem(await getItemById(id));
      } catch (e) {
        setError(e);
      }
      setCargando(false);
    }
    cargar();
  }, [id, intento]);

  const volver = () => navigate("/catalogo");

  if (cargando) return <Skeleton active />;

  // la API responde 404 si el id no existe
  if (error?.response?.status === 404 || (!error && !item)) {
    return (
      <Result
        status="404"
        title="Elemento no encontrado"
        extra={<Button onClick={volver}>Volver al catálogo</Button>}
      />
    );
  }

  if (error) {
    return (
      <Alert
        type="error"
        title="No pudimos cargar el detalle"
        action={<Button onClick={() => setIntento(intento + 1)}>Reintentar</Button>}
      />
    );
  }

  return (
    <>
      <Button onClick={volver} style={{ marginBottom: 16 }}>
        ← Volver
      </Button>
      <Card title={item.name}>
        <img
          alt={item.name}
          src={item.sprites.other["official-artwork"].front_default}
          style={{ width: "100%", maxWidth: 250, display: "block", margin: "0 auto" }}
        />
        <Descriptions column={1} bordered size="small">
          <Descriptions.Item label="Número">#{item.id}</Descriptions.Item>
          <Descriptions.Item label="Tipos">
            {item.types.map((t) => t.type.name).join(", ")}
          </Descriptions.Item>
          <Descriptions.Item label="Altura">{item.height / 10} m</Descriptions.Item>
          <Descriptions.Item label="Peso">{item.weight / 10} kg</Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  );
}
