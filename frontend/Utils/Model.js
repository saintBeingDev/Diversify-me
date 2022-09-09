import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

import React, { useState } from "react";

const Model = () => {
    const [openModal, setOpenModal] = useState();
  const [modalSize, setModalSize] = useState('md');
  const [modalPlacement, setModalPlacement] = useState('center');
  return (
    <>
      <button className='hover:cursor-pointer text-blue-600 bg-white p-2 w-32 text-center rounded-lg' onClick={() => setOpenModal('form-elements')}>Join Us</button>
      <Modal show={openModal === 'form-elements'} size="md" popup={true} onClose={() => setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-2 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
             Diversify me
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Describe on what on what topics you want to write shortly" />
              </div>
              <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full rounded py-3 px-[14px] text-body-color text-base border-2 border-[#f0f0f0] resize-none outline-none focus-visible:shadow-none  dark:border-white dark:text-gray-200 dark:bg-[#374151] dark:focus:border-white"
            ></textarea>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Model;
