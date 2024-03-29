import React from "react";
import { useState } from 'react';

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
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Indice</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Acerca</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Servicio</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Producto</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Contacto</a>
                </div>
            </div>)}
        </div>
    )
}