import React, { useState } from "react";
import { Categories } from "../../sections";
import CategoryCard from "../../components/CategoryCard";

const CategoryPost = () => {
  const [filteredPosts, setFilteredPosts] = useState("")
  return (
    <div className="border-2 border-red-500 grid grid-cols-1 gap-2 md:gap-4 content-center text-center min-h-screen w-auto md:grid-cols-3">
      <div className="rounded-lg mt-4 w-full h-full col-span-3 md:col-span-full">
        <Categories />
        {/* This categoryCard is for 'All' category */}
        <div className="grid md:grid-cols-3 gap-2 w-full h-full p-2">
          <CategoryCard filteredPosts={filteredPosts} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;
