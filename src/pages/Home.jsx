import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Home() {
  return (
    <>
      <h1>Catálogo de Pokémon</h1>
      <p>
        Este catálogo usa la PokeAPI. Podés ver el listado de Pokémon, buscarlos por nombre
        y entrar al detalle de cada uno.
      </p>
      <Link to="/catalogo">
        <Button type="primary">Ver el catálogo</Button>
      </Link>
    </>
  );
}
