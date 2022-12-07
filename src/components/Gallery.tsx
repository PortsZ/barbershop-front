import React from "react";
import GalleryCarousel from "./GalleryCarousel";
import SharpoetryLogo from "./Logo";


const Gallery = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <div className="flex">
      <h1 className="lg:text-8xl sm:text-6xl text-4xl font-zilla font-bold py-6">
        <SharpoetryLogo name='GALLERY'/>
      </h1></div>
      <div className="w-full h-full mx-auto ">
        <div className="flex flex-col w-full ">
          <div className="md:w-full text-center md:py-8 py-10 w-full ">
            <div className=" w-full mt-3 rounded-l-3xl flex items-center justify-center bg-gradient-dark md:py-10 min-h-[500px]
            ">
              <GalleryCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
