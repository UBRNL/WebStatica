import { IoLogoReact } from "react-icons/io5";
import { Link } from 'react-router-dom';
import ListaMenu from './ListaMenu';



export default function Head() {
    return(
        <nav className="bg-gradient-to-r from-red-300 to-green-400 p-4">
            <div className="flex justify-between items-center mx-5 ">
                <div className="">
                    <Link to="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer" className="text-blue-800">
                        <IoLogoReact className='w-10 h-10' />
                    </Link>
                </div>
                <div className="hidden md:flex justify-between w-2/3 mx-10">
                    <Link to="/" className="text-blue-800 mx-2 font-semibold text-[20px]">Inicio</Link>
                    <Link to="/about" className="text-blue-800 mx-2 font-semibold text-[20px]">Acerca</Link>
                    <Link to="/servicios" className="text-blue-800 mx-2 font-semibold text-[20px]">Servicios</Link>
                    <Link to="/productos" className="text-blue-800 mx-2 font-semibold text-[20px]">Productos</Link>
                    <Link to="/contacto" className="text-blue-800 mx-2 font-semibold text-[20px]">Contacto</Link>
                </div>
                <div className="md:hidden">
                    <Link to="/componente/ListaMenu" className="text-white font-semibold text-[20px] mr-3"><ListaMenu/></Link>
                </div>
            </div>
           

        </nav>
       
    )
}
