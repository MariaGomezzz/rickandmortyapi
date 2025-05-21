import React, { useEffect, useState } from "react"
import Character from "../components/Character"
import { getCharacters } from "../services/api";
import Pagination from "../components/Pagination";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await getCharacters();
      setCharacters(results);
    };

    fetchData();

  }, [])
  console.log("padre", characters)

  return (
    <div className="px-5">
      <div className="text-center m-8">
        <h2 className="text-2xl font-black">Rick and Morty Personajes</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {(characters && Array.isArray(characters)) ? (
          characters.map((character, i) => (
            <Character
              key={i}
              character={character}
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
      <Pagination />
    </div>
  )
}
