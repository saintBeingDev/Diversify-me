import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner, Toast } from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful, isSubmitted, isSubmitting },
    setValue,
    reset,
  } = useForm({ defaultValues: { email: "", subject: "", text: "" } });

  useEffect(() => {
    setValue("email", window.localStorage.getItem("email"));
  }, []);

  useEffect(() => {
    setValue("email", window.localStorage.getItem("email"));

    if (isSubmitSuccessful) {
      setTimeout(() => {
        reset({ email: "", subject: "", text: "" });
      }, 4000);
    }
  }, [formState, isSubmitSuccessful, reset]);

  const onSubmitForm = async (values) => {
    console.log("before", isSubmitSuccessful);
    try {
      const res = await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(values),
      });
      const text = await res.text();
    } catch (error) {
      console.log("pages/contact", error);
    }
    console.log("after", isSubmitSuccessful);
  };
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
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
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
              />
              {errors.email && (
                <p className="text-red-700 dark:text-red-400 text-sm pl-2 pt-2">
                  {errors.email.message}.
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
              />
              {errors.subject && (
                <p className="text-red-700 dark:text-red-400 text-sm pl-2 pt-2">
                  Please leave a valid subject
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                {...register("text", { required: true })}
                name="text"
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 resize-none dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
              {errors.text && (
                <p className="text-red-700 dark:text-red-400 text-sm pl-2 pt-2">
                  Please leave a valid message
                </p>
              )}
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#93c5fd]-300 dark:bg-[#2563eb]-600 dark:hover:bg-[#1d4ed8]-700 dark:focus:ring-[#1e40af]-800"
              disabled={isSubmitSuccessful || isSubmitted}
              >
              {isSubmitting ? (
                  <div className="text-center">
                    <Spinner
                      color="warning"
                      aria-label="Center-aligned spinner example"
                    />
                    <span className="pl-3">Sending...</span>
                  </div>
                ): isSubmitSuccessful ?(
                <div className="flex items-center divide-gray-200 dark:divide-gray-700">
                  <FaTelegramPlane className="h-5 w-5 text-green-300 dark:text-green-200" />
                <div className="pl-4 text-sm font-normal">
                  Message sent successfully.
                </div></div>):"Send message"
              }
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
