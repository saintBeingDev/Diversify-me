import React from "react";
import Image from "next/image";
import banner from '../images/banner4.jpg'
const SearchBanner = ({filteredPosts, setFilteredPosts}) => {
  return (
    <>
      <div className="rounded-lg col-span-3 grid grid-cols-10 max-h-96 mb-7 md:mb-14">
        <div className="-z-10 w-full row-span-full relative col-start-1 col-span-10">
          <div className="overflow-hidden h-24 md:h-44 w-full relative">
            <Image
              src={banner}
              className="h-full w-full object-fill rounded-xl"
              alt="banner" layout="fill" objectFit="fill"
            />
          </div>
          <p className="font-extrabold text-3xl md:text-5xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center text-white">
            Blogs
          </p>
        </div>
        {/* <!-- Search bar --> */}
        <div className="row-span-full col-span-6 col-start-1 w-full col-end-11 self-end justify-center mx-auto">
          <div className=" h-10 md:h-16 w-2/5 px-4 md:w-1/3 mx-auto flex items-center -mb-6 md:-mb-10 shadow-2xl bg-white dark:bg-darkSecondary rounded-xl md:px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="border-transparent focus:border-transparent focus:ring-0 outline-none w-full px-4 text-sm md:text-lg dark:bg-darkSecondary"
              type="text"
              placeholder="search"
              onKeyUp={e=>setFilteredPosts(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBanner;
