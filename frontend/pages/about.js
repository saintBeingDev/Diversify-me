import React, { useState, useEffect } from "react";
import aboutImg from "../images/about2.jpg";
import Image from "next/image";
import Model from "../Utils/Model";

const About = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className=" relative mt-6 w-full h-full flex items-center px-0 md:px-10">

        <div className="absolute hidden md:inline md:top-12 md:left-0 z-20 h-52 md:h-72 w-52 md:w-72 shadow-xl overflow-hidden rounded-3xl">
          <Image
            src={aboutImg}
            height={100}
            width={100}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="w-full md:w-4/5 h-96 gap-4 bg-blue-600 md:ml-52 md:pl-32 rounded-3xl flex items-center md:items-start justify-center flex-col">
          <h3 className="text-4xl font-bold text-left text-white">
            Diversify me
          </h3>
          <h3 className="text-lg w-full px-2 md:px-0 text-center md:w-2/3 md:text-left text-white">
            A platform for writing all your amazing thoughts for
            expressing it to world
          </h3>
          {domLoaded && <Model text={'Join us'}/>}
        </div>
      </div>
  );
};

export default About;
