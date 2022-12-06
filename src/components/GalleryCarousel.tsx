import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import {staggerContainer} from '../../utils/motion'
import ExploreCard from "./ExploreCard";

const GalleryCarousel = () => {
  const [active, setActive] = useState('gallery1')
  
  
  const images = [
    {id: 'gallery1',
    url:"/images/gallery1.jpg",
    title: 'GALLERY1',
    isFirst:true,
  },
    {id: 'gallery2',
    url:"/images/gallery2.jpg",
    title: 'GALLERY2'},
    {id: 'gallery3',
    url:"/images/gallery3.jpg",
    title: 'GALLERY3'},
    {id: 'gallery6',
    url:"/images/gallery6.jpg",
    title: 'GALLERY6'},
    {id: 'gallery7',
    url:"/images/gallery7.jpg",
    title: 'GALLERY7'},
    {id: 'gallery8',
    url:"/images/gallery8.jpg",
    title: 'GALLERY8',
    isLast: true,
  },
    
   
  ];
  const lastImage = images.length - 1;
  

  

  return (
    <div className="w-full  flex justify-center items-center">
      <div className="cursor-grab w-full h-full rounded-l-3xl">
        <div className="flex flex-col md:flex-row w-full h-[90vh] md:h-auto 
        justify-center items-center p-6 gap-2 md:gap-3 lg:gap-5 ">
          {images.map((image, index)=>{
            return(
              <ExploreCard
                key={image.id}
                {...image}
                index={index}
                active={active}
                handleClick={setActive}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;



