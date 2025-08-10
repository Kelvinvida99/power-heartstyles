import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

export default function Navbar(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Power Heartstyle" className="h-10 w-10 object-cover"/>
          <span className="font-bold text-xl">Power Heartstyle</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-gray-700">Inicio</Link>
          <Link to="/services" className="hover:text-gray-700">Servicios</Link>
          <a href="https://wa.link/xikl2h" className="ml-4 px-4 py-2 bg-black text-white rounded">Reservar a Domicilio</a>
        </nav>

        {/* Mobile menu button (puedes implementar dropdown si quieres) */}
      </div>
    </header>
  )
}
