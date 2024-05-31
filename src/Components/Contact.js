import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <div className='flex justify-between items-center py-3 mt-16'>
        <h1 className='text-sm md:text-lg lg:text-xl font-semibold'>Contact</h1>
        <div>
          <p className="text-sm"><NavLink to={"/"} className='text-blue-500'>Home</NavLink> / Contact</p>
        </div>
      </div>
    </>
  )
}

export default Contact
