import { useEffect, useState } from "react"
import Character from "../components/Character"
import { getCharacters } from "../services/api";
import Pagination from "../components/Pagination";

export default function CharactersPage() {
  // Estado que almacena todos los personajes que vienen de la API
  const [allCharacters, setAllCharacters] = useState([]);

  // Estado para almacenar los personajes filtrados (por estado o búsqueda)
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  // Estado para guardar los filtros seleccionados
  const [filtersSelected, setFiltersSelected] = useState({
    status: "",
    gender: "",
    search: "",
  })

  useEffect(() => {
    // Función asincrónica para traer los datos desde la API
    const fetchData = async () => {
      const { results } = await getCharacters();
      setAllCharacters(results);
    };

    fetchData();
  }, [])


  useEffect(() => {
    const resultFilterCharacters = allCharacters.filter((character) => {
      // Se agrega al array si no hay filtro o si el estado coincide
      const matchStatus =
        filtersSelected.status === "" || character.status === filtersSelected.status;

      // Se agrega al array si no hay filtro o si el género coincide
      const matchGender =
        filtersSelected.gender === "" || character.gender === filtersSelected.gender;

      // Se agrega al array si no hay búsqueda o si el nombre contiene el texto
      const matchSearch =
        filtersSelected.search === "" ||
        character.name.toLowerCase().includes(filtersSelected.search.toLowerCase());

      return matchStatus && matchGender && matchSearch;
    });

    // Actualiza el estado con los personajes que cumplen los filtros
    setFilteredCharacters(resultFilterCharacters);
  }, [allCharacters, filtersSelected]);


  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado de filtros, manteniendo los demás intactos
    setFiltersSelected((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <>
      <div className="text-center m-8">
        <h2 className="text-2xl font-black">Rick and Morty Personajes</h2>
      </div>

      {/* Sección de filtros */}
      <div className="flex gap-3 content-center">
        {/* Campo de búsqueda */}
        <div className="flex gap-3 content-center">
          <input
            type="text"
            name="search"
            placeholder="Buscar personaje..."
            className="border p-2 rounded w-full max-w-md mb-6"
            value={filtersSelected.search}
            onChange={handleFilterChange}
          />
        </div>

        {/* Select para filtrar por estado */}
        <select
          name="status"
          value={filtersSelected.status}
          onChange={handleFilterChange} // Cambia el estado al seleccionar una opción
          className="border p-2 rounded h-10"
        >
          <option value="">Todos los estados</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>

        {/* Select para filtrar por genero */}
        <select
          name="gender"
          value={filtersSelected.gender}
          onChange={handleFilterChange} // Cambia el estado al seleccionar una opción
          className="border p-2 rounded h-10"
        >
          <option value="">Todos los genéros</option>
          <option value="Female">Mujer</option>
          <option value="Male">Hombre</option>
          <option value="Genderless">Sin genéro</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>

      {/* Contenedor de tarjetas de personajes */}
      <div className="flex flex-wrap justify-center gap-4">
        {Array.isArray(allCharacters) && allCharacters.length > 0 ? (
          filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
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
