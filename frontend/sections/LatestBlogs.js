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
    <div className="h-auto w-full hover:drop-shadow-2xl bg-white duration-700 ease-in-out dark:bg-darkColor hover:dark:bg-darkSecondary rounded-xl mt-20 md:mt-0 py-6 px-4 container">
      {/* <!-- Heading --> */}
      <div className="flex items-center justify-start gap-3 w-auto mx-4 mb-6 border-b dark:border-gray-500 pb-2">
        <p className="text-2xl">🔥</p>
        <h3 className="md:text-xl font-bold font-poppins">Latest Blogs</h3>
      </div>

      {/* <!-- All blog div --> */}
      <div className="flex flex-col gap-3">
        {recentPosts.map((post) => (
          <>
            {/* <!-- Single Blog div --> */}
            {/* <div key={post?.title} className="flex items-center justify-start gap-2">
              <Avatar
                img={urlFor(post?.authorImage?.asset._ref).width(50).url()}
                rounded={true}
                alt={`${post?.name}'s picture`}
              />
              <h3 className="text-sm"> {post.name} </h3>
              <p className="text-sm text-gray-400"> {moment(post && post.publishedAt).format("MMM DD, YYYY")}</p>
            </div> */}
            <div key={post.slug} className="flex w-full mb-4">
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
                  {/* <h5 className="rounded-lg px-2 py-1 bg-gray-200 text-xs dark:bg-darkColor dark:text-white">
                    {post.categories}
                  </h5> */}
                  <h5 className="text-gray-400 text-sm">🚀{post.readTime} min read</h5>
                </div>
              </div>
            </div>
            {/* <!--End of Single Blog div --> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
