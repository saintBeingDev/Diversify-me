import {
  FeaturedPost,
  Categories,
  LatestBlogs,
  SearchBanner,
  TopContributors,
} from "../sections";
import CategoryCard from "../components/CategoryCard";
import { useState } from "react";



export default function Home() {
  const [filteredPosts, setFilteredPosts] = useState("")
  return (
    <div className="grid grid-cols-1 gap-2 md:gap-4 content-center text-center w-full max-h-full md:grid-cols-3">
      <SearchBanner filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts}/>

      <FeaturedPost />

      {/* side widgets */}
      <div className="rounded-lg w-auto h-auto col-span-3 row-start-4 row-end-4 md:row-start-2 md:row-end-5 md:col-start-3 md:col-end-4 flex flex-col-reverse md:flex-col gap-3">
        <TopContributors />
        <LatestBlogs />
      </div>
      {/* end of side widgets */}
      <div className="rounded-lg w-full h-full col-span-3 md:col-span-2 md:row-start-3 md:row-span-5">
        <Categories />
        {/* This categoryCard is for 'All' category */}
        <div className="grid md:grid-cols-2 gap-2 w-full h-full">
          <CategoryCard filteredPosts={filteredPosts} />
        </div>
      </div>
    </div>
  );
}
