import { useEffect, useState } from 'react'
import { getEpisodes } from '../services/api';
import Episode from '../components/Episode';


export default function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await getEpisodes();
      setEpisodes(results);
    };

    fetchData();
  }, [])

  return (
    <>
      <div>
        <div className="text-center m-8">
          <h2 className="text-2xl font-black">Rick y Morty Episodios</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {(episodes && Array.isArray(episodes)) ? (
            episodes.map((episode, i) => (
              <Episode
                key={i}
                data={episode}
              />
            ))
          ) : (
            <div>
              <p>
                No hay datos
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
