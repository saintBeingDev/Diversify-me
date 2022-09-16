// [slug].js

import React from "react";
import groq from "groq";
import client from "../../client";
import { getPostDetails } from "../../services";
import { PostDetails } from "../../components";
import { useRouter } from "next/router";
import Loader from "../../Utils/Loader";

const Post = ({ post }) => {
  const router = useRouter()

    if(router.isFallback){
        return <Loader/>
    }

  

  // return (
  //   <article>
  //     <h1>{title}</h1>
  //     <p>{excerpt}</p>
  //     <span>By {name} on {publishedDate}</span>

  //     {categories && (
  //       <ul>
  //         Posted in
  //         {categories.map((category) => (
  //           <li key={category}>{category}</li>
  //         ))}
  //       </ul>
  //     )}
  //     {authorImage && (
  //       <div>
  //         <img
  //           src={urlFor(authorImage).width(50).url()}
  //           alt={`${name}'s picture`}
  //         />
  //       </div>
  //     )}
  //     <div className="w-full md:w-11/12 h-[250px] md:h-[500px] -mt-20 md:-mt-14 overflow-hidden z-10 rounded-2xl">
  //       <img src={urlFor(mainImage).url()} className="w-full h-full  object-cover" alt={`${name}'s picture`} />
  //     </div>
  //     <BlockContent
  //       blocks={body}
  //       serializers={Serializers}
  //       imageOptions={{
  //         width: 500,
  //         height: 500,
  //       }}
  //     />


  //   </article>
  // );

  return (
    <div suppressHydrationWarning className="min-h-screen w-full mb-4">
      <PostDetails post={post}/>
    </div>
  )
};



export async function getStaticPaths() {
  const posts = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: posts.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({params}) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = params;
  const data = await getPostDetails(slug)

  return {
    props: {
      post:data
    },
    revalidate: 30
  };
}
export default Post;
