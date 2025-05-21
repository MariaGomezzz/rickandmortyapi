
export default function Character({ character }) {
  const {
    name,
    status,
    image,
    species,
    origin,
    location,
    episode } = character;

  return (
    <>
      <div className="w-[300px] rounded-lg shadow-lg">
        <div>
          <img className="rounded-t-lg" src={image} alt="Character image" />
        </div>

        <div className="w-full flex justify-betwee px-3 mt-4 mb-2">
          <h3 className="grow text-xl text-balck font-bold">{name}</h3>
          <div className={`h-[28px] inline-flex items-center px-3 py-1 rounded-xl text-xs font-medium ${status === "Alive"
            ? "bg-green-100 text-green-800"
            : status === "Dead"
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800"
            }`} >

            {status === "Alive"
              ? <span className="flex flex-nowrap items-center gap-0.5">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                Vivo
              </span>
              : status === "Dead"
                ? <span className="flex flex-nowrap items-center gap-0.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                  Muerto
                </span>
                : <span className="flex flex-nowrap items-center gap-0.5">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-1"></div>
                  Desconocido
                </span>
            }
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm mb-4 px-3">
          <div>
            <p className="text-gray-500">Especie</p>
            <p>{species}</p>
          </div>

          <div>
            <p className="text-gray-500">Origen</p>
            <p>{origin.name}</p>
          </div>

          <div>
            <p className="text-gray-500">Ubicación</p>
            <p>{location.name}</p>
          </div>

          <div>
            <p className="text-gray-500">Episodios</p>
            <p>{episode.length}</p>
          </div>
        </div>

      </div>
    </>
  )
}