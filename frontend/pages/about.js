import React, { useState,useEffect } from 'react'
import aboutImg from '../images/about2.jpg'
import Image from 'next/image'
import Model from '../Utils/Model'
const about = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className='w-full min-h-screen flex items-center px-10'>

      <div className="absolute z-20 h-72 w-72 shadow-xl overflow-hidden rounded-3xl">
        <Image src={aboutImg} height={100} width={100} layout="fill" objectFit='cover'/>
      </div>

      <div className='w-full relative h-96 ml-32 pl-52 gap-4 bg-blue-600 rounded-3xl flex items-start justify-center flex-col'>
        <h3 className='text-4xl font-bold text-left text-white'>Diversify me</h3>
        <h3 className='text-lg w-2/3 text-left text-white'>A platform for writing all your amazing thoughts into a post for express your thoughts to world</h3>
      {domLoaded && (
        <Model/>
      )}
      </div>

    </div>
  )
}

export default about