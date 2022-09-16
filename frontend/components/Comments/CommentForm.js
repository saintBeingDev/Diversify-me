import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const CommentForm = ({ _id }) => {
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues ,
        setValue
    } = useForm();
    
    useEffect(() => {
      setValue('name', window.localStorage.getItem('name'))
      setValue('email', window.localStorage.getItem('email'))  
    }, [])
    
    const onSubmit = async (data) => {
      setIsSubmitting(true);
      try {
        await fetch("/api/comment", {
          method: "POST",
          body: JSON.stringify({ ...data, _id }),
        });
        setIsSubmitting(false);
        setHasSubmitted(true);
        setTimeout(()=>{
          setHasSubmitted(false)
        },3000)

        if(getValues('storeData')){
          window.localStorage.setItem('name',getValues('name'))
          window.localStorage.setItem('email',getValues('email'))
        }else{
          window.localStorage.removeItem('name',getValues('name'))
          window.localStorage.removeItem('email',getValues('email'))
        }

      
    } catch (err) {
      console.log(err);
    }

};

  if (hasSubmitted) {
    // Returns the data that the user submitted for them to preview after submission
    return (
      <>
        <div className="w-full md:w-4/5 md:px-4">
          <div className="bg-white dark:bg-darkColor rounded-lg md:p-8 ">
            <h3 className="text-xl dark:text-green-300 text-purple-600 text-postBg font-bold mb-6">
              🎊Thanks! 📝Your comment has been sent for review
            </h3>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-full md:w-4/5 md:px-4">
      <div className="bg-white dark:bg-darkColor rounded-lg md:p-8 ">
        <h3 className="text-xl dark:text-white font-bold mb-6">Leave a reply</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex items-center w-full gap-2">
            <div className="mb-6 md:w-1/2 ">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded py-3  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none first-letter:focus-visible:shadow-none focus:border-primary dark:border-white dark:text-gray-200 dark:bg-darkColor dark:focus:border-white"
              />
              {errors.name && (
                <p className="text-red-700 dark:text-red-400 text-sm pl-2 pt-2">
                  Name is required.
                </p>
              )}
            </div>
            <div className="mb-6 md:w-1/2">
              <input
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary dark:border-white dark:text-gray-200 dark:bg-darkColor dark:focus:border-white"
              />
              {errors.email && (
                <p className="text-red-700 dark:text-red-400 text-sm pl-2 pt-2">
                  {errors.email.message}.
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <textarea
              {...register("text", { required: true })}
              rows="6"
              placeholder="Your Message"
              className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary dark:border-white dark:text-gray-200 dark:bg-darkColor dark:focus:border-white"
            ></textarea>
            {errors.text && (
              <p className="text-red-700 dark:text-red-400 text-sm pl-2 pt-2">
                Please leave a valid message
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input
              id="link-checkbox"
              type="checkbox"
              {...register("storeData")} value={true}
              className="w-4 h-4 text-blue-600 rounded border-gray-300 "
            />
            <label
              htmlFor="link-checkbox"
              className="ml-2 text-sm font-medium dark:text-gray-300 text-gray-900 "
            >
              Save my e-mail and name for next time I comment
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full text-white bg-brightPurple rounded p-3 transition hover:bg-opacity-90 "
            >
              {isSubmitting ? "Submitting comment...":"Post Comment"}
            </button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default CommentForm;
