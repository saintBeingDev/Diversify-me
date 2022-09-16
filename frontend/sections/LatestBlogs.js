import { Avatar } from "flowbite-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getRecentPosts } from "../services";
import moment from "moment";
import { urlFor } from "../client";
import Link from "next/link";



const LatestBlogs = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getRecentPosts().then((res) => {
      setRecentPosts(res);
    });
  }, []);

  return (
    <div className="h-auto w-full drop-shadow-2xl bg-white md:duration-700 md:ease-in-out dark:bg-darkColor hover:dark:bg-darkSecondary rounded-xl mt-28 md:mt-0 py-6 px-4 container">
      
      <div className="flex items-center justify-start gap-3 w-auto mx-4 mb-6 border-b dark:border-gray-500 pb-2">
        <p className="text-2xl">🔥</p>
        <h3 className="md:text-xl font-bold font-poppins">Latest Blogs</h3>
      </div>

      <div className="flex flex-col gap-3">
        {recentPosts.map((post) => (
            <div key={post.title} className="flex w-full mb-4">
              <div className="h-20 w-32 overflow-hidden mr-4 relative">
                <Image
                  src={urlFor(post?.mainImage).url()}
                  className="w-full h-full"
                  alt="profile"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-md font-semibold text-left">
                  <Link href={`/post/${post.slug.current}`}>
                  {post.title}
                  </Link>
                 
                </h3>
                <div className="flex gap-4 items-center">
                  <h5 className="text-gray-400 text-sm">🚀{post.readTime} min read</h5>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
