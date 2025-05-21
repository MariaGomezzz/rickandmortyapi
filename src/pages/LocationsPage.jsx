import { useEffect, useState } from "react";
import { getLocations } from "../services/api";
import Location from "../components/Location";

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await getLocations();
      setLocations(results);
    };

    fetchData();
  }, [])

  return (
    <>
      <div>
        <div className="text-center m-8">
          <h2 className="text-2xl font-black">Rick y Morty Ubicaciones</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {(locations && Array.isArray(locations)) ? (
            locations.map((location, i) => (
              <Location
                key={i}
                data={location}
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
