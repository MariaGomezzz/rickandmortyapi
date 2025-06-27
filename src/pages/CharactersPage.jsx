import { useEffect, useState } from "react"
import Character from "../components/Character"
import { getCharacters } from "../services/api";
import Pagination from "../components/Pagination";

export default function CharactersPage() {
  // Estado que almacena todos los personajes que vienen de la API
  const [allCharacters, setAllCharacters] = useState([]);

  // Estado para guardar lo que escribe el usuario en el input de búsqueda
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    // Función asincrónica para traer los datos desde la API
    const fetchData = async () => {
      const { results } = await getCharacters();
      setAllCharacters(results);
    };

    fetchData();

  }, [])

  // Filtra los personajes según el texto ingresado por el usuario
  let searchedCharacters = allCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <>
      <div className="text-center m-8">
        <h2 className="text-2xl font-black">Rick and Morty Personajes</h2>
      </div>

      {/* Campo de búsqueda */}
      <div className="flex gap-3 content-center">
        <input
          type="text"
          placeholder="Buscar personaje..."
          className="border p-2 rounded w-full max-w-md mb-6"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>

      {/* Contenedor de tarjetas de personajes */}
      <div className="flex flex-wrap justify-center gap-4">
        {Array.isArray(allCharacters) && allCharacters.length > 0 ? (
          searchedCharacters.length > 0 ? (
            searchedCharacters.map((character) => (
              <Character key={character.id} character={character} />
            ))
          ) : (
            <p>No se encontraron personajes</p>
          )
        ) : (
          <p>No hay datos</p>
        )}
      </div>
      <Pagination />
    </>
  )
}
