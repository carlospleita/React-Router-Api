import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

// PokeAPI no busca por nombre parcial, así que filtramos la lista acá
export async function getItems(buscar = "") {
  const { data } = await api.get("/pokemon?limit=151");

  const pokemons = data.results.map((p) => {
    const id = p.url.split("/").at(-2); // ".../pokemon/25/" -> "25"
    return {
      id,
      name: p.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  });

  return pokemons.filter((p) => p.name.includes(buscar.toLowerCase()));
}

export async function getItemById(id) {
  const { data } = await api.get(`/pokemon/${id}`);
  return data;
}
