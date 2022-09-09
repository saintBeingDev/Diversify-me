import React from "react";
import { urlFor } from "../client";

import CodeBlock from "./CodeBlock";

export const Serializers = {
    types: {
      image: (props) => {
        const value =  props?.node?.asset
        const width = props?.options?.imageOptions?.width
        const height = props?.options?.imageOptions?.height
        
        // console.log("image",props)
        if (!value._ref) {
          return null;
        }
        return (
          <>
          <div className="flex w-full ">
          <img
              alt={value.alt || " "}
              loading="lazy"
              src={urlFor(value)
                // .width(width)
                // .height(height)
                // .fit("max")
                // .auto("format")
            }
              className="object-cover scale-100 h-auto max-w-full mx-auto my-4"
            />
          </div>
            
          </>
        );
      },
      block: (props) => {
        const { style = "normal" } = props.node;

        if (/^h\d/.test(style)) {
          const level = style.replace(/[^\d]/g, "");
          return React.createElement(
            style,
            { className: `heading-${level}` },
            props.children
          );
        }

        if (style === "blockquote") {
          return (
            <blockquote className="bg-gray-100 border-l-4 border-gray-300 dark:bg-reactionIconBgDark dark:text-gray-200 p-4">
              {" "}
              {props.children}
            </blockquote>
          );
        }
        if (style === "normal") {
          return <p className="text-justify py-2 md:p-2 text-gray-600 dark:text-gray-400"> {props.children}</p>;
        }
        if (style === "h2") {
          return <p className="text-xl"> {props.children}</p>;
        }

        // Fall back to default handling
        return BlockContent.defaultSerializers.types.block(props);
      },
      code: (props) => (
        <CodeBlock language={props.node.language} code={props.node.code}/>
      ),
    },
    list: (props) =>
      (props.type === "bullet" ? (
        <ul className="p-5 list-disc">{props.children}</ul>
      ) : (
        <ol className="p-5 list-decimal">{props.children}</ol>
      )),
    listItem: (props) =>
      props.type === "bullet" ? (
        <li className="p-5">{props.children}</li>
      ) : (
        <li>{props.children}</li>
      ),


    marks: {
      strong: (props) => <strong className="text-red-500 dark:text-sky-400">{props.children}</strong>,
      em: (props) => <em className="text-red-500 dark:text-sky-500">{props.children}</em>,
      code: (props) => <code>{props.children}</code>,
      link: (props) => {
        // console.log(props.mark?.href.startsWith("/"));
        const target = (props.mark?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        const rel = !props.mark.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a
            href={props.mark.href}
            target={target}
            rel={rel}
            className="text-red-500 hover:text-red-600 dark:text-sky-200 border-b-2 border-dotted dark:border-sky-200 border-red-700 dark:hover:border-sky-300 dark:hover:text-sky-300"
          >
            {props.children}
          </a>
        );
      },
    },
  };