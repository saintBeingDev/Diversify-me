import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from "react";

const FeaturedPost = () => {
  const slider = useRef(null);

  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);


  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="md:inline hidden rounded-lg col-span-3 md:col-span-2 ">
      <div className="w-auto h-52 md:h-64 relative overflow-hidden rounded-xl ">
      <Slider ref={slider} {...settings}>
          { dataLoaded && featuredPosts.map((post) => (
              <FeaturedPostCard key={post.title} post={post} />
          ))}
      </Slider>

        {/* buttons */}
        
        <div className="absolute bottom-0 right-0 flex items-center justify-between mb-6 mr-8 gap-6">
        <div className="backdrop-blur-xl backdrop-contrast-75 w-full border-1 p-2 text-white rounded-xl shadow-xl">
          <button
            onClick={() => slider?.current?.slickPrev()}
            className="flex hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="backdrop-blur-xl backdrop-contrast-75 w-full border-1 p-2  rounded-xl text-white shadow-xl">
          <button
            onClick={() => slider?.current?.slickNext()}
            className="flex hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
