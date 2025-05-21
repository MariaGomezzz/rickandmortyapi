export default function Episode({ data }) {
  const { name, air_date, episode, characters } = data;

  function parseSeansoAndEpisode(episode) {
    const match = episode.match(/S(\d+)E(\d+)/i);
    return {
      seasonNum: match[1],
      episodeNum: match[2],
    };
  }

  const seasonAndEpisodeNum = parseSeansoAndEpisode(episode);

  return (
    <>
      <div className="w-[300px] rounded-lg shadow-lg">
        <div className="w-full flex justify-betwee px-3 mt-4 mb-4">
          <h3 className="grow text-xl text-balck font-bold">{name}</h3>
          <div className="h-[28px] inline-flex items-center px-3 py-1 rounded-xl text-xs font-medium bg-green-100 text-green-800">
            <span className="flex flex-nowrap items-center">{episode}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm mb-4 px-3">
          <div>
            <p className="text-gray-500">Temporada</p>
            <p>{seasonAndEpisodeNum.seasonNum}</p>
          </div>
          <div>
            <p className="text-gray-500">Episodio</p>
            <p>{seasonAndEpisodeNum.episodeNum}</p>
          </div>
          <div>
            <p className="text-gray-500">Emisión</p>
            <p>{air_date}</p>
          </div>
          <div>
            <p className="text-gray-500">Personaje</p>
            <p>{characters.length}</p>
          </div>
        </div>
      </div>
    </>
  )
}
