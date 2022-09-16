import { Avatar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { urlFor } from "../client";
import { getAllAuthors } from "../services";
import Model from "../Utils/Model";

const TopContributors = () => {
  const [authors, setAuthors] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);

    getAllAuthors().then((result) => {
      setAuthors(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div className="h-auto drop-shadow-2xl bg-white duration-700 ease-in-out dark:bg-darkColor hover:dark:bg-darkSecondary rounded-xl py-6 px-4 container">
      {/* <!-- Heading --> */}
      <div className="flex items-center justify-start gap-3 w-auto mx-4 mb-6 dark:border-gray-600 border-b-2 pb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-fit p-1 bg-pink-600 rounded-md text-white m-2 "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
        <h3 className="md:text-xl font-bold dark:text-slate-50 font-poppins">
          Top Contributors
        </h3>
      </div>

      {/* <!-- Contributors --> */}
      <div className="flex flex-col ml-6 gap-2">
        {/* <!-- Singler author div --> */}
        {dataLoaded &&
          authors.map((author,index) => (
            <div key={index} className="flex items-center justify-start gap-3">
              <div className="relative rounded-full h-7 w-7 overflow-hidden">
                {/* <Avatar
                  img={urlFor(author.image).url()}
                  rounded={true}
                /> */}
                <Image className="w-7 h-7 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={urlFor(author.image).url()} layout="fill" alt={author.name}/>
              </div>

              <p className="text-darkGrayishBlue dark:text-gray-500 text-sm md:text-base font-medium hover:cursor-pointer">
               <Link href={`/author/${author.slug}`}>
               {author?.name}
               </Link>
               
              </p>
            </div>
          ))}
      </div>

      {domLoaded && <Model text={'Become an Author 📝'}/>}
    </div>
  );
};

export default TopContributors;
