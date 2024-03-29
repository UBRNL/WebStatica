import React from "react";
import gafas from  "../assets/img3.png";
import realidadAumentada from  "../assets/img5.png";
import Software from  "../assets/img1.png";
import  Avatar  from '../assets/avatar.jpeg';
import premium  from '../assets/img2.png'


const elements = [
    {
      id: 1,
      name: 'Gafas',
      description: 'Gafas de realidad virtual (RV) de alta calidad: WebEasy ofrece gafas de RV de última generación para permitir a los usuarios sumergirse completamente en experiencias de metavero envolventes y realistas.',
      image: gafas
    },
    {
      id: 2,
      name: 'Accesorios',
      description: 'Accesorios de realidad aumentada (RA): La empresa vende accesorios como guantes hápticos, controladores de movimiento y sensores de seguimiento para mejorar la interacción y la inmersión en entornos de RA.',
      image: realidadAumentada
    },
    {
      id: 3,
      name: 'Software',
      description: 'Software de creación de mundos virtuales: WebEasy proporciona software especializado para que los usuarios puedan crear sus propios mundos virtuales personalizados, con herramientas de diseño intuitivas y funciones avanzadas de programación.',
      image: Software
    },
    {
        id: 4,
        name: 'Avatar',
        description: 'Avatar personalizados: Los clientes pueden adquirir servicios de personalización de avatares para representarse en el metavero de manera única y distintiva, con opciones de personalización detalladas y realistas.',
        image: Avatar
      },
    {
        id: 5,
        name: 'Premium',
        description: 'Suscripciones premium a plataformas de metavero: WebEasy ofrece acceso exclusivo a plataformas de metavero premium con contenido adicional, funciones avanzadas y soporte prioritario para una experiencia de metavero de primera clase.',
        image: premium
      }
  ];

  const ElementCard = ({ card }) => (
    <div className="grid-cols-3 sm:flex-col sm:justify-center sm:items-center justify-between items-center w-[300px]">
      <img className="w-52 h-[160px] flex justify-center items-center ml-10" src={card.image} alt={card.name} />
      <h2 className="text-[20px] font-bold my-4 mx-5 text-center">{card.name}</h2>
      <p className="text-[14px] flex text-justify my-4">{card.description}</p>
    </div>
  );

export { elements, ElementCard };