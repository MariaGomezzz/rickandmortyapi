import { Navbar } from './Navbar'
import { Link } from 'react-router'

export default function Header() {
  return (
    <>
      <div className="w-full h-[60px] flex justify-between px-4 py-4 bg-white border-b border-gray-200">  <Link to="/" className="text-xl font-medium mb-4 sm:mb-0">
          Rick y Morty
        </Link>
        <Navbar />
      </div>
    </>
  )
}
