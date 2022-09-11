import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

import React, { useState } from "react";

const Model = () => {

    const [openModal, setOpenModal] = useState();

    const handleSubmit = async(e)=>{
      e.preventDefault()
      const formData = {}

      Array.from(e.currentTarget.elements).forEach(field =>{
        if( !field.name ) return;
        formData[field.name] = field.value
      })

      try {
        const res = await fetch('/api/mail',{
          method:"POST",
          headers:{
            "Content-Type":'application/json',
          },
          body: JSON.stringify(formData)
        })
        console.log(formData)
      } catch (error) {
        console.log('from model',error)
      }
      
    }

  return (
    <>
      <button className='hover:cursor-pointer text-blue-600 bg-white p-2 w-32 text-center rounded-lg' onClick={() => setOpenModal('form-elements')}>Join Us</button>
     <Modal show={openModal === 'form-elements'} size="md" position={'center'} popup={true} onClose={() => setOpenModal(undefined)}>       
     <Modal.Header />
        <Modal.Body>
          <div className="space-y-2 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
             Diversify me
            </h3>
            <form method="POST" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Your name" />
              </div>
              <input
                name="name"
                placeholder="Your name"
                className="w-full rounded py-3  px-[14px] text-body-color text-base border border-[f0f0f0] dark:border-gray-600 outline-none first-letter:focus-visible:shadow-none dark:text-gray-200 dark:bg-[#374151] dark:focus:border-white"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <input
                name="email"
                placeholder="name@gmail.com"
                className="w-full rounded py-3  px-[14px] text-body-color text-base border border-[f0f0f0] dark:border-gray-600 outline-none first-letter:focus-visible:shadow-none dark:text-gray-200 dark:bg-[#374151] dark:focus:border-white"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Describe on what on what topics you want to write shortly" />
              </div>
              <textarea
              name="msg"
              rows="6"
              placeholder="Your Message"
              className="w-full rounded py-3 px-[14px] text-body-color text-base border-2 border-[#f0f0f0] resize-none outline-none focus-visible:shadow-none  dark:border-gray-600 dark:text-gray-200 dark:bg-[#374151] dark:focus:border-white"
            ></textarea>
            </div>
            <div className="w-full">
              <button type='submit' className="mt-4 w-full text-white bg-brightPurple rounded p-3 transition hover:bg-opacity-90">Submit</button>
            </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Model;
