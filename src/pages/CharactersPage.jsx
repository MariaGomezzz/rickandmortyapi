import { useEffect, useState } from "react"
import Character from "../components/Character"
import { getCharacters } from "../services/api";
import Pagination from "../components/Pagination";

export default function CharactersPage() {
  // Estado que almacena todos los personajes que vienen de la API
  const [allCharacters, setAllCharacters] = useState([]);

  // Estado para almacenar los personajes filtrados (por estado o búsqueda)
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  // Estado para guardar lo que escribe el usuario en el input de búsqueda
  const [searchData, setSearchData] = useState("");

  // Estado para guardar el estado seleccionado del personaje (Alive, Dead, Unknown)
  const [selectedStatus, setSelectedStatus] = useState('');


  useEffect(() => {
    // Función asincrónica para traer los datos desde la API
    const fetchData = async () => {
      const { results } = await getCharacters();
      setAllCharacters(results);
    };

    fetchData();
  }, [])


  // useEffect que se ejecuta cada vez que cambia el estado seleccionado o la lista original
  useEffect(() => {
    // Si no se ha seleccionado ningún estado, se muestran todos los personajes
    if (selectedStatus === "") {
      setFilteredCharacters(allCharacters);
    } else {
      // Si se selecciona un estado (vivo, muerto, desconocido), filtramos por él
      setFilteredCharacters(
        allCharacters.filter((character) =>
          character.status.toLowerCase().includes(selectedStatus.toLowerCase())
        )
      );
    }
  }, [allCharacters, selectedStatus]);

  // Filtra los personajes según el texto ingresado por el usuario
  let searchedCharacters =
    filteredCharacters.filter(
      (character) =>
        character.name.toLowerCase().includes(searchData.toLowerCase())
    );

  return (
    <>
      <div className="text-center m-8">
        <h2 className="text-2xl font-black">Rick and Morty Personajes</h2>
      </div>

      {/* Sección de filtros */}
      <div  className="flex gap-3 content-center">
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

        {/* Select para filtrar por estado */}
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)} // Cambia el estado al seleccionar una opción
          className="border p-2 rounded h-10"
        >
          <option value="">Seleccione un estado</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
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
