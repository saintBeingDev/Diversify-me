import { Avatar } from "flowbite-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getAllPosts, getCategoryPost } from "../services";
import { urlFor } from "../client";
import moment from "moment";
import Link from "next/link";
import Loader from "../Utils/Loader";

const CategoryCard = ({ filteredPosts }) => {
  const router = useRouter();
  const slug = router.query.slug;
  const [categoryPost, setCategoryPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      if (slug) {
        getCategoryPost(slug).then((res) => setCategoryPost(res));
        setLoading(false);
      } else if (filteredPosts) {
        let value = filteredPosts.trim().toLowerCase();
        let posts = categoryPost.filter(
          (p) =>
            p.title.trim().toLowerCase().indexOf(value) !== -1 || // for searching with title
            p.categories.map((cat) =>
              cat.title.trim().toLowerCase().indexOf(value)
            ) >= 0 || // for searching with category
            p.excerpt.trim().toLowerCase().indexOf(value) !== -1 // for searching withing excerpt
        );
        setCategoryPost(posts);
        setLoading(false);
      } else {
        getAllPosts().then((res) => setCategoryPost(res));
        setLoading(false);
      }
    } catch (error) {
      setLoading(true);
    }
  }, [slug, filteredPosts]);

  return (
    <>
      {loading ? (
        <div className="md:col-span-full min-h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          {!loading && categoryPost.length == 0 ? (
            <>
              <div className="flex items-center justify-center md:col-span-full h-32 w-full">
                <h1 className="flex items-center justify-center text-3xl text-gray-400">
                  No blogs found
                </h1>
              </div>
            </>
          ) : (
            <>
              {categoryPost.map((post) => (
                <div
                  key={post.title}
                  className="group flex flex-col dark:bg-darkColor sm:col-span-3 md:col-span-1 justify-between hover:drop-shadow-2xl bg-white duration-700 ease-in-out hover:dark:bg-darkSecondary h-fit md:h-[420px] mt-2 p-3 w-full rounded-md"
                >
                  <div className="overflow-hidden w-full h-40 rounded-md relative">
                    <Image
                      src={urlFor(post.mainImage).url()}
                      className="w-full h-full duration-700 ease-out group-hover:scale-110 transition-transform"
                      alt="profile"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex gap-4 pt-2">
                    {post?.categories?.map((cat) => (
                      <h6
                        key={cat.title}
                        className="mt-1.5 rounded-lg px-2 py-1 bg-green-200 text-green-700 dark:bg-secondary dark:text-gray-300 text-xs w-fit"
                      >
                        {cat.title}
                      </h6>
                    ))}
                  </div>
                  <h3 className="mt-1.5 text-left text-lg font-bold w-full">
                    <Link href={`/post/${post?.slug?.current}`}>
                      {post?.title}
                    </Link>
                  </h3>
                  <p className="mt-1.5 text-left text-gray-500 text-sm">
                    {post?.excerpt}
                  </p>

                  <div className="flex items-center justify-start gap-2 mt-1.5">
                    {/* <!-- Author and time --> */}
                    <Avatar
                      img={urlFor(post.authorImage).url()}
                      rounded={true}
                    />
                    <h3 className="text-sm font-semibold">{post?.author}</h3>
                    <p className="text-sm text-gray-400">
                      {" "}
                      {moment(post && post.publishedAt).format("MMM DD, YYYY")}
                    </p>
                    {/* <!-- End of Author and time --> */}
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default CategoryCard;
