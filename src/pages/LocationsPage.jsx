import { useEffect, useState } from "react";
import { getLocations } from "../services/api";
import Location from "../components/Location";

export default function LocationsPage() {
  // Estado que almacena todas las ubicaciones que vienen de la API
  const [allLocations, setLocations] = useState([]);

  // Estado para guardar lo que escribe el usuario en el input de búsqueda
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    // Función asincrónica para traer los datos desde la API
    const fetchData = async () => {
      const { results } = await getLocations();
      setLocations(results);
    };

    fetchData();
  }, [])

  // Filtra las ubicaciones según el texto ingresado por el usuario
  let searchedLocations = allLocations.filter((character) =>
    character.name.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <>
      <div className="text-center m-8">
        <h2 className="text-2xl font-black">Rick y Morty Ubicaciones</h2>
      </div>

      {/* Campo de búsqueda */}
      <div className="flex gap-3 content-center">
        <input
          type="text"
          placeholder="Buscar episodio..."
          className="border p-2 rounded w-full max-w-md mb-6 mx-3"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>

      {/* Contenedor de tarjetas de ubicaciones */}
      <div className="flex flex-wrap justify-center gap-4">
        {(Array.isArray(allLocations) && allLocations.length > 0) ? (
          searchedLocations.length > 0 ? (
            searchedLocations.map((character) => (
              <Location key={character.id} data={character} />
            ))
          ) : (
            <p>No se encontraron personajes</p>
          )
        ) : (
          <div>
            <p>
              No hay datos
            </p>
          </div>
        )}
      </div>
    </>
  )
}
