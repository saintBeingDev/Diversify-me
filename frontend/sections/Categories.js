import { Avatar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import blogging from "../images/bloging3.jpg";
import Image from "next/image";
import { getCategories } from "../services";
// const allCats = ["all", "web dev", "cyber sec", "mobile dev", "photoshop"];
import Link from "next/link";

const Categories = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const onOptionChangeHandler = (e)=>{
    {console.log("User Selected Value - ", e.target.value)}
    <Link href={e.target.value}/>
  }
  return (
    // <!-- Categories -->
    <>
      {/* <!-- Categories links --> */}
      <div className="flex flex-wrap align-center justify-center gap-5">
        <Link href={`/`} scroll={false}>
          <p
            className={` ${
              router.pathname == "/" ? "active" : "inactive"
            } hover:cursor-pointer p-0.5 rounded-md px-2.5 capitalize font-normal transition-colors`}
          >
            All
          </p>
        </Link>
          {categories.map((cat, index) => (
            <div key={index}>
              {/* for pc version */}
              <Link href={`/category/${cat?.slug}`} scroll={false}>
                <p
                  className={` ${
                    router.query.slug == cat?.slug ? "active" : " inactive"
                  } hover:cursor-pointer p-0.5 rounded-md px-2.5 capitalize font-normal transition-colors`}
                >
                  {cat.title}
                </p>
              </Link>
            </div>
          ))}
      </div>
      {/* <!-- End of Categories links --> */}
    </>
  );
};

export default Categories;
