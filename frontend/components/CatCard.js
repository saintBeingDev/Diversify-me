import React from "react";
import { urlFor } from "../client";
import moment from "moment";
import Link from "next/link";
import { Avatar } from "flowbite-react";
import Image from "next/image";

const CatCard = ({post}) => {
  return (
    <div className="group flex flex-col dark:bg-darkColor sm:col-span-3 md:col-span-1 justify-between hover:drop-shadow-2xl bg-white duration-700 ease-in-out hover:dark:bg-darkSecondary md:h-[420px] mt-2 p-3 w-full rounded-md" >
      <div className="overflow-hidden w-full h-40 rounded-md relative">
        <Link href={`/post/${post?.slug?.current}`}>
          <Image
            src={urlFor(post.mainImage).url()}
            className="hover:cursor-pointer w-full h-full duration-700 ease-out group-hover:scale-110 transition-transform"
            alt="profile"
            layout="fill"
            objectFit="cover"
          />
        </Link>
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
        <Link href={`/post/${post?.slug?.current}`}>{post?.title}</Link>
      </h3>
      <p className="mt-1.5 text-left text-gray-500 text-sm">{post?.excerpt}</p>

      <div className="flex items-center justify-start gap-2 mt-1.5">
        {/* <!-- Author and time --> */}
        <Avatar img={urlFor(post.authorImage).url()} rounded={true} />
        <h3 className="text-sm font-semibold">{post?.author}</h3>
        <p className="text-sm text-gray-400">
          {moment(post && post.publishedAt).format("MMM DD, YYYY")}
        </p>
        {/* <!-- End of Author and time --> */}
      </div>
    </div>
  );
};

export default CatCard;
