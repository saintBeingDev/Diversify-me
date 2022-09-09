import React, { useEffect, useState } from 'react'
import Model from '../Utils/Model'

const contact = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
    {domLoaded && (
      <Model/>
    )}
    </>
    
  )
}

export default contact