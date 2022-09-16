
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getAllPosts, getCategoryPost } from "../services";

import Loader from "../Utils/Loader";
import CatCard from "./CatCard";

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
        getAllPosts().then((res) =>setCategoryPost(res));
        setLoading(false)
      }
    } catch (error) {
      setLoading(true);
    }
  }, [slug, filteredPosts]);

  return (
    <>
      { loading ? 
        (
          <div className="md:col-span-full mt-12 md:mt-32 min-h-screen">
          <Loader />
        </div>
        )
      :
        categoryPost.map((post) => (
            <CatCard post={post} key={post?.title} />
        ))
      }
    </>
  );
};

export default CategoryCard;
