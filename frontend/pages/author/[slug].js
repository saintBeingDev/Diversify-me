import { getSingleAuthorDetails } from "../../services";
import groq from "groq";
import client, { urlFor } from "../../client";
import Image from "next/image";
import { Serializers } from "../../Utils/Serializers";
import BlockContent from "@sanity/block-content-to-react";
import { HiLocationMarker } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";


const Author = ({ author }) => {
    return (
    <>
      <div className="flex items-center justify-center h-full w-full mt-2">
        <div className="absolute hover:shadow-2xl overflow-hidden w-44 md:w-64 h-44 md:h-64 rounded-full mx-auto top-24 md:top-16">
          <Image
            src={urlFor(author?.image).url()}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="bg-white drop-shadow-2xl duration-700 ease-in-out dark:bg-darkSecondary pb-10 rounded-lg -z-10 relative mt-32 h-full md:max-h-auto w-full">
          <div className="h-32 w-full mt-16 md:mt-0 flex items-center justify-between ">
            <div className="md:ml-32">
              <div className="text-center dark:text-gray-300 text-lg md:text-2xl font-bold hover:cursor-pointer">
                {author?.postsCount}
              </div>
              <h2 className="dark:text-gray-400 w-full pl-2 md:pl-0">Contribution</h2>
            </div>
            <div className="flex items-center flex-col md:mr-20">
              <h2 className="pr-2 md:pr-0 text-center dark:text-gray-300 text-base md:text-lg font-semibold">
                {author?.email}
              </h2>
              <h2 className="dark:text-gray-400 ">Contact me</h2>
              
            </div>
          </div>
          <div className=" flex flex-col gap-2 items-center h-32 w-full">
            <h2 className="pt-3 text-4xl">👋{author?.name}</h2>
            <h2 className="flex items-center text-gray-400 gap-2 capitalize">
              <span className="text-gray-400 text-xl">
                <HiLocationMarker />
              </span>{" "}
              {author?.location}
            </h2>
            <h2 className="flex items-center gap-2 text-gray-400 capitalize">
              <span className="text-gray-400 text-xl">
                <FaGraduationCap />
              </span>{" "}
              {author?.profession}
            </h2>
          </div>
          <div className="pt-4 flex items-start justify-center text-center h-full w-full">
            <BlockContent
              blocks={author?.bio}
              serializers={Serializers}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const authors = await client.fetch(
    groq`*[_type == "author" && defined(slug.current)][].slug.current`
  );

  return {
    paths: authors.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = params;
  const data = await getSingleAuthorDetails(slug);

  return {
    props: {
      author: data,
    },
    revalidate: 30,
  };
}
export default Author;
