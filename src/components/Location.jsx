export default function Location({ data }) {
  const { name, type, dimension, residents } = data

  return (
    <>
      <div className="w-[300px] rounded-lg shadow-lg">
        <div className="w-full flex justify-betwee px-3 mt-4 mb-4">
          <h3 className="grow text-xl text-balck font-bold">{name}</h3>
          <div className="h-[28px] inline-flex items-center px-3 py-1 rounded-xl text-xs font-medium bg-gray-100 text-gray-800">
            <span className="flex flex-nowrap items-center">{type}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm mb-4 px-3">
          <div>
            <p className="text-gray-500">Dimensión</p>
            <p>{dimension}</p>
          </div>
          <div>
            <p className="text-gray-500">Residentes</p>
            <p>{residents.length}</p>
          </div>
        </div>
      </div>
    </>
  )
}
