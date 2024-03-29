import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ListaMenu() {
    const [mostrarLista, setMostrarLista] = useState(false);
    const toggleLista = (e) => {
        e.preventDefault()
    setMostrarLista(!mostrarLista);
  };
    return(
        <div className="relative inline-block text-left">
            
                <button onClick={toggleLista} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#24311f] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
               {mostrarLista ? 'Ocultar Menu' : 'Menu'}
                </button>
            
       
            {mostrarLista && (
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                <Link to="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Indice</Link>
                <Link to="/about" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Acerca</Link>
                <Link to="/servicios" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Servicio</Link>
                <Link to="/productos" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Producto</Link>
                <Link to="/contacto" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Contacto</Link>
                </div>
            </div>)}
        </div>
    )
}