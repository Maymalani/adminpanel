import React from 'react';
import { NavLink } from 'react-router-dom';

const ViewUser = () => {
  return (
    <>
      <div className='h-16 flex justify-between items-center py-3 mt-16'>
        <h1 className='text-sm md:text-lg lg:text-xl font-semibold'>View User</h1>
        <div>
          <p className="text-sm"><NavLink to={"/"} className='text-purple-500'>Home</NavLink> / View User</p>
        </div>
      </div>
    </>
  )
}

export default ViewUser
