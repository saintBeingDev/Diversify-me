import client,{urlFor} from "../../client";
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image';
import BlockContent from "@sanity/block-content-to-react";

import { Avatar} from 'flowbite-react'
import moment from "moment";
import { Serializers } from "../../Utils/Serializers";

const PostContent = ({post}) => {
  const {
    name="Missing name",
    excerpt,
    readTime,
    authorImage,
    mainImage,
    // publishedDate = new Date().toISOString().split('T')[0],
    publishedAt,
    body = [],
  } = post

  return (
    <>
      {/* <!-- Actual post --> */}
      <div className="w-full h-full p-4 flex flex-col items-center justify-center">
        <div className="relative w-full md:w-11/12 h-[250px] md:h-[500px] -mt-20 md:-mt-16 z-2 overflow-hidden rounded-2xl">
          <Image
            src={urlFor(mainImage).url()}
            className=""
            layout="fill"
            sizes="(max-width: 800px) 100vw, 800px"
            objectFit="cover"
            alt="PostImage"
          />
          {/* <Image
            {...imageProps}
            src={urlFor(mainImage).url()}
            className=""
            layout="responsive"
            sizes="(max-width: 800px) 100vw, 800px"
            alt="PostImage"
          /> */}
        </div>

        <div className="w-full md:w-11/12 my-2 md:m-5">
          {/* <!-- author div --> */}
          <div className="md:hidden w-full grid grid-cols-7 gap-4 mb-4 align-middle justify-center">
            {/* <!-- Author and time --> */}
            <div className="col-span-1 rounded-full w-10 h-10 overflow-hidden">
              <Avatar
                img={urlFor(authorImage).width(50).url()}
                rounded={true}
              />
            </div>
            <div className="w-full col-span-4">
              <h3 className="md:text-sm font-bold text-md">{name} </h3>
              <p className="text-sm text-gray-400">
                {moment(publishedAt).format("MMM DD, YYYY")}
              </p>
            </div>
            <div className="w-24 borer-2 mt-2 col-span-2">
              <p className=" text-gray-500 text-sm">🚀{readTime} min read</p>
            </div>
            {/* <!-- End of Author and time --> */}
          </div>
          {/* <!-- End of author div --> */}
          {/* <!-- Content --> */}
          <BlockContent
            blocks={body}
            serializers={Serializers}
            imageOptions={{ width: 500, height: 500 }}
          />
        </div>
      </div>
    </>
  );
};

export default PostContent;
