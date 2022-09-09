import { Spinner } from 'flowbite-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-full min-h-screen flex items-center z-20 justify-center'>
        <Spinner aria-label="Extra large spinner example" size="xl"/>
    </div>
  )
}

export default Loader