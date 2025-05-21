import { NavLink } from "react-router"

export const Navbar = () => {
  return (
    <>
      <ul className="flex flex-row gap-3">
        <li>
          <NavLink
            to="/personajes"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Personajes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/episodios"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Episodios
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ubicaciones"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Ubicaciones
          </NavLink>
        </li>
      </ul>
    </>
  )
}
