import { useEffect, useState } from 'react'
import { getEpisodes } from '../services/api';
import Episode from '../components/Episode';


export default function EpisodesPage() {
  // Estado que almacena todos los episodios que vienen de la API
  const [allEpisodes, setAllEpisodes] = useState([]);

  // Estado para guardar lo que escribe el usuario en el input de búsqueda
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await getEpisodes();
      setAllEpisodes(results);
    };

    fetchData();
  }, [])

  // Filtra los episodios según el texto ingresado por el usuario
  let searchedEpisodes = allEpisodes.filter((character) =>
    character.name.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <>
      <div className="text-center m-8">
        <h2 className="text-2xl font-black">Rick y Morty Episodios</h2>
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

      {/* Contenedor de tarjetas de episodios */}
      <div className="flex flex-wrap justify-center gap-4">
        {(Array.isArray(allEpisodes) && allEpisodes.length > 0) ? (
          searchedEpisodes.length > 0 ? (
            searchedEpisodes.map((character) => (
              <Episode key={character.id} data={character} />
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
