import { Avatar } from "flowbite-react";
import moment from "moment";
import { TbTriangle } from "react-icons/tb";
import { urlFor } from "../../client";
import ReactionIcons from "./ReactionIcons";
import { AiOutlineStar } from "react-icons/ai";
import SharePost from "../../Utils/SharePost";
import PostContent from "./PostContent";
import RelatedPosts from "./RelatedPosts";
import CommentForm from "../Comments/CommentForm";
import Comment from "../Comments/Comment";
const PostDetails = ({ post }) => {
  return (
    <>
      {/* Start of div for title and author */}
      <div className="h-44 md:h-64 w-full grid grid-cols-5 bg-[#0B2855] relative">
        
        
        {/* <!-- bg icons --> */}
        <div className="absolute right-4 bottom-36 md:bottom-48 md:right-82 rotate-3 ">
          <TbTriangle className="text-[#D58590] stroke-[#D58590] rotate-12 w-5 h-5 md:h-12 md:w-10" />
        </div>
        <div className="absolute top-20 left-6 md:top-32 md:left-20 rotate-45 translate-y-2">
          <AiOutlineStar className="text-[#6735C6] w-5 h-8 md:h-12 md:w-12 stroke-[#6735C6]" />
        </div>
        {/* <!--End of bg icons --> */}
        
        {/* Heading Div */}
        <div className="md:col-span-4 col-span-full flex justify-start flex-col items-center gap-3 pt-4">
          <h3 className="text-gray-400 text-sm sm:text-center md:text-left md:pl-2">
            {post && post.categories}
          </h3>

          <h1 className="md:text-4xl text-xl text-center leading-6 sm:px-2 text-lightColor capitalize font-semibold">
            {post && post.title}
          </h1>
        </div>

        {/* Author div */}
        <div className="md:col-span-1 hidden md:flex flex-col items-start justify-center gap-2 pl-2">
          <div className="text-gray-500 text-sm">A post by</div>
          <div className="flex items-center justify-start gap-2">
            <Avatar
              img={urlFor(post?.authorImage?.asset._ref).width(50).url()}
              rounded={true}
              alt={`${post?.name}'s picture`}
            />
            <div>
              <h3 className="text-md text-lightColor">{post && post.name}</h3>
              <p className="text-sm text-gray-400">
                {moment(post && post.publishedAt).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>

          <div className="text-gray-500 text-sm pt-4">Share this post on :</div>
          <SharePost slug={post?.slug.current}/>
        </div>
      </div>
      {/* End of div for title and author */}

      {/* Start of div for post content and reaction */}
      <div className="grid grid-cols-4 w-full">
        <div className="col-span-full md:col-span-3 w-full">
          <PostContent post={post} />
        </div>
        <div className="col-span-4 md:col-span-1 md:sticky self-start md:top-2">
          <ReactionIcons _id={post._id} likes={post.likes} love={post.love} party={post.party} claps={post.claps}/>
        </div>
      </div>
      {/* <!-- End of post div --> */}

      {/* End of div for post content and reaction */}
      <RelatedPosts category={post?.catSlug} />


    {/* Comments form div */}
      <CommentForm _id={post._id}/>
      <Comment comments={post?.comments} count={post?.count} />
    </>
  );
};

export default PostDetails;
