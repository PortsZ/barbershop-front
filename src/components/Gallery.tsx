import React from "react";
import Example from "./Example";
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
            <div className="example-container
            ">
              <Example  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
