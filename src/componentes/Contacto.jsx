import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías agregar lógica para enviar los datos a un servidor o realizar alguna acción adicional

    };

    return (
        <div className="max-w-md mx-auto bg-blue-400 p-8 rounded shadow-md mt-10">
            <h1 className="text-2xl font-bold mb-4">Agendar Cita con Asesor</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3" />
                </div>
                <div className="mb-4">
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
                    <input type="email" id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3" />
                </div>
                <div className="mb-4">
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3" />
                </div>
                <Link to="/asesor" type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Enviar</Link>
            </form>
            
        </div>
    );
};

export default Contacto;
