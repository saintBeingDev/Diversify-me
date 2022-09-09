import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import featureImg from "../images/healthylifestyle.webp";
import client, { urlFor } from "../client";

import Link from "next/link";

const FeaturedPostCard = ({ post }) => {
  return (
       <div key={post.title} className="group flex h-52 md:h-64 w-full overflow-hidden mx-auto">
        <div style={{ width: "100%", position: "relative" }}>
          {/* <Image src={featureImg} layout="fill" objectFit="cover" /> */}
          <Image
            src={urlFor(post?.mainImage).url()}
            layout="fill"
            className="object-cover relative h-full w-full"
          />
        </div>
        {/* <div className="absolute w-full h-full backdrop-blur backdrop-contrast-75 md:h-0 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500 px-10"> */}
        <div className="absolute w-full h-full bg-gradient-to-r from-brightPurple via-transparent to-transparent bg-opacity-5 md:h-0 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500 px-10">
          <h6 className="mt-8 md:mt-12 bg-gray-800 w-fit px-2 md:px-4 py-0.5 text-white rounded-md uppercase text-xs md:text-sm font-semibold tracking-wider">
            Featured
          </h6>
          <Link href={`/post/${post.slug.current}`}>
            <h3 className="hover:cursor-pointer text-left text-xl md:text-4xl w-72 md:w-[650px] font-bold text-white mt-2 ">
              {post?.title}
            </h3>
          </Link>
          <p className="hidden md:block sm:w-72 md:w-[450px] md:mt-2 lg:w-3/5 text-xs mb-2 text-white font-semibold text-left md:text-sm ">
            {post?.excerpt}
          </p>
        </div>
      </div>
  );
};

export default FeaturedPostCard;
