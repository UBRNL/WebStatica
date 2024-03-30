import React from "react";
import imgUno from  "../assets/img1.png";
import imgDos from  "../assets/img2.png";
import imgTres from  "../assets/img3.png";
import imgCuatro from '../assets/img4.png'
import { Link } from "react-router-dom";

    const activities = [
        {
          id: 1,
          name: 'Discuss with Colleagues',
          description: 'Working online is the same experience as work ing in an office. This will be. achieved with..',
          image: imgUno
        },
        {
          id: 2,
          name: 'Discuss with Colleagues',
          description: 'Working online is the same experience as work ing in an office. This will be. achieved with..',
          image: imgDos
        },
        {
          id: 3,
          name: 'Discuss with Colleagues',
          description: 'Working online is the same experience as work ing in an office. This will be. achieved with..',
          image: imgTres
        },
        {
            id: 4,
            name: 'Discuss with Colleagues',
            description: 'Working online is the same experience as work ing in an office. This will be. achieved with..',
            image: imgCuatro
          }
      ];
      
      const ActivityCard = ({ activity }) => (
        <div className="col-sm-6 col-md-12  flex flex-col border-1 border-red-400">
          <img src={activity.image} alt={activity.name} />
          <h2 className="text-[20px] font-bold">{activity.name}</h2>
          <p className="text-[14px]">{activity.description}</p>
          <Link to="/productos" className="bg-gradient-to-r from-red-300 to-green-400 opacity-90 text-[#ff303a] hover:opacity-90 cursor-pointer rounded-xl p-3 mt-3 w-40" type="button">Explore the topic</Link>
        </div>
      );
export { activities, ActivityCard };
        