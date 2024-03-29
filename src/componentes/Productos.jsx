import React from 'react';
import { ElementCard, elements } from './Element';

const Productos = () => {
    return (
        <>
        <div className='bg-blue-400 shadow-blue-50 rounded-xl p-3 mx-10 my-10'>
                <h3>La empresa <strong>WebEasy</strong>, especializada en servicios de metavero, también ofrece una variedad de productos innovadores para complementar sus soluciones digitales. Algunos ejemplos de productos que esta empresa podría vender incluyen:
                </h3>           
        </div>
        <section className="flex flex-wrap justify-center items-center gap-5 mx-10 md:mx-16 w-100 h-100 ">
    {elements.map((card) => (
        <ElementCard className='w-[200px]' key={card.id} card={card}  />
    ))}
    </section>

    </>
    );
}

export default Productos;