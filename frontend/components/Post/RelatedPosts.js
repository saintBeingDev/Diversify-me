import { useState, useEffect } from "react";
import Link from "next/link";
import { getSimilarPosts } from "../../services";
import { urlFor } from "../../client";
import Image from "next/image";
import { useRouter } from "next/router";

const RelatedPosts = ({category}) => {
  const router = useRouter();
  const slug = router.query.slug
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(category)
      getSimilarPosts(category[0].current, slug).then((result) => {
        setRelatedPosts(result);
      })
  }, [slug]);

  return (
    <>
{
  relatedPosts.length > 0 &&
  <>
  <h3 className="text-center text-2xl font-extrabold mt-10">Related articles👇</h3>
      <div className="p-2 mb-10 md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        { relatedPosts.map((post) =>(
              
            <div key={post?.title} className="w-full md:w-full flex items-center">
              <div
                className=" h-28 w-24 md:h-32 md:w-32 lg:w-44 lg:h-44 flex-none rounded-t md:rounded-t-none md:rounded-l overflow-hidden relative"
                height="32"
                width="32"
                title="Mountain"
              >
                 <Link className="cursor-pointer" href={`/post/${post?.slug?.current}`}>
                <Image src={urlFor(post?.mainImage).url()} className=" duration-700 ease-out hover:scale-110 transition-transform" layout="fill" objectFit="cover" />
                </Link>
              </div>
             
              <div className=" bg-white dark:bg-darkColor rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-0 md:mb-8">
                  <div className="text-gray-900 dark:text-white font-bold text-xl mb-2">
                  <Link href={`/post/${post?.slug?.current}`}>
                    {post.title}
                  </Link>
                  </div>
                  <p className="hidden text-gray-700 dark:text-gray-300 text-base md:flex pb-0 mb-0">
                    {post?.excerpt}
                  </p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">{post?.name}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">🚀{post?.readTime} mins read</p>
                </div>
              </div>
            </div>
        ))}
      </div>
  
  </>
}
      
    </>
  );
};

export default RelatedPosts;
