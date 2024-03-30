import React from "react";
import chica from "../assets/chica.png"
import { activities, ActivityCard } from './Cards';
import { Link } from "react-router-dom";


export default function Body(){
    return(
        <main className="mr-4">
            <section className="flex flex-col md:flex-row justify-center items-center sm:mx-10 mx-6 ">
                <div className=" order-1 md:order-1 text-[#fff] font-bold display-2 sm:text-[18px]">
                    <div className="mb-16">
                        <p className=" text-[53px] ">Explore the future of the Metaverse</p>
                        <strong className="text-[60px] font-bold bg-clip-text text-[#ff6767] shadow-zinc-800 ">WebEasy</strong>
                    </div>
                    <Link to="/contacto" className="bg-gradient-to-r from-red-300 to-green-400 rounded-lg p-3 text-[#fff] hover:opacity-45" type="button">Get Strated</Link>
                </div>
                <div className="order-2 md:order-2 flex justify-center mt-6 ">
                    <img className="sm:hidden md:block" src={chica} alt="chica" />
                </div>   
            </section>

            <section className="md:flex-row justify-center items-center sm:mx-10 mx-6 mb-5">
                    <p className="text-white text-[30px] flex justify-center items-center">How does the Metaverse work</p>
                    <p className="text-[20px] flex justify-center items-center text-white">It is an incredible world where fiction is reality and you control that reality. I invite you to be part of our world.</p>
            </section>

            <section className="flex items-center gap-5 mx-10 flex-col md:flex-row justify-center sm:mx-16">
                {activities.map(activity => (
                <ActivityCard key={activity.id} activity={activity} />
            ))}
            </section>
        </main>


    )
}