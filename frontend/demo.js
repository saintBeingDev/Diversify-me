// [slug].js
import { useState, useEffect } from "react";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism"; // changed esm -> cjs
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = ({ post }) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    mainImage,
    body = [],
  } = post;

  const [copied, setCopied] = useState(false);

  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <>
            <img
              alt={value.alt || " "}
              loading="lazy"
              src={urlFor(value)
                .width(320)
                .height(240)
                .fit("max")
                .auto("format")}
            />
          </>
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
        const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
        
        return (
          <a
          href={value.href}
          target={target}
          className="font-bold text-blue-700"
          rel={rel}
          >
            {children}
          </a>
        );
      },

    },
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-purple-500 bg-gray-200 m-2 p-2 rounded-md">
          {children}
        </blockquote>
      ),
      normal: ({ children }) => (
        <p className="text-gray-500 font-poppins">{children}</p>
      ),

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),

      list: ({children, value}) =>
      // console.log("list", props) &&
      children.type === "bullet" ? (
        <ul className="text-blue-800">{value}</ul>
      ) : (
        <ol>{value}</ol>
      ),
      listItem: (props) =>
      console.log("list", props) ||
      (props.type === "bullet" ? (
        <li>{props.children}</li>
      ) : (
        <li>{props.children}</li>
      )),
    },
    types: {
      code: ({ value }) => {
        return (
          <>
            {/* {console.log(value.code)} */}
            <h6>{value.language}</h6>
            <div className="mx-5">
              <CopyToClipboard text={value.code} onCopy={() => setCopied(true)}>
                {copied ? (
                  <>
                    <TiTick className="text-green-500" />
                  </>
                ) : (
                  <FiCopy />
                )}
              </CopyToClipboard>
              <SyntaxHighlighter
                // In this example, `props` is the value of a `code` field
                language={value.language}
                style={materialDark}
                className="rounded-md"
              >
                {value.code}
              </SyntaxHighlighter>
            </div>
          </>
        );
      },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  }, []);

  return (
    <article>
      {console.log(post)}
      <h1>{title}</h1>
      <span>By {name}</span>

      {categories && (
        <ul>
          Posted in
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage).width(50).url()}
            alt={`${name}'s picture`}
          />
        </div>
      )}
      <div>
        <img src={urlFor(mainImage).url()} alt={`${name}'s picture`} />
      </div>
      <PortableText value={body} components={ptComponents} />
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
   mainImage{
    asset->{
      _id,
      url
     }
   },
  body
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;


// ! Some trial and error while using getSimilar post in groq
// ******** This works with similar post for single keyword*************

// *[_type == 'post'&& (slug.current!= $slug && $keyword in categories[]->slug.current) && !(_id in path("drafts.**"))]{
//   title,
//   slug
// }

//*********** array of keywords******


//*[_type == 'post'&& (slug.current!= $slug && 
//                     ([categories[]->slug.current] in $keyword))
// ]{
// title,
// slug
//}