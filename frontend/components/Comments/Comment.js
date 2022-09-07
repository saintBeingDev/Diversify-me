import { Avatar } from "flowbite-react";
import moment from "moment";
import React from "react";

const Comment = ({ comments = [], count }) => {



  return (
    <div className="w-full md:w-4/5 md:px-4 m-4 ">
      <div className="flex items-center justify-between shadow-sm m-4">
        <h3 className="text-lg font-semibold">Comments({count})</h3>
        {/* <button className="px-3 py-2 bg-brightPurple text-white btn md:relative md:inline-flex md:items-center md:justify-start md:overflow-hidden md:transition-all md:bg-white rounded md:hover:bg-white group">
          <span className="md:w-0 md:h-0 md:rounded md:bg-brightPurple md:absolute md:top-0 md:left-0 md:ease-out md:duration-500 md:transition-all md:group-hover:w-full md:group-hover:h-full md:-z-1"></span>
          <span className=" md:w-full md:text-black md:transition-colors md:duration-300 md:ease-in-out md:group-hover:text-white md:z-10">
            +Write a comment
          </span>
        </button> */}
      </div>

      {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <div key={_id} className="flex items-start justify-start gap-4 m-4 w-full pb-4 border-b border-gray-200 dark:border-gray-500">
          {/* <div className="w-28 md:w-20 overflow-hidden ">
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          </div> */}
          <div>
            <h3 className="text-md font-semibold dark:text-gray-400">{name}</h3>
            <h6 className="text-sm text-gray-500 ">{moment(_createdAt).format("MMM DD, YYYY")}</h6>
            <p className="pt-2 text-gray-700 dark:text-gray-200 text-justify md:pr-4 pr-6">{comment}</p>
          </div>
        </div>
      ))}

      {/* <!-- Single Comment --> */}
      
      {/* <!-- End of Single Comment --> */}
    </div>
  );
};

export default Comment;
