import React from 'react';
import { NavLink } from 'react-router-dom';

const AddCourse = () => {
  return (
    <>
      <div className='h-16 flex justify-between items-center py-3 mt-16'>
        <h1 className='text-sm md:text-lg lg:text-xl font-semibold'>Add Course</h1>
        <div>
          <p className="text-sm"><NavLink to={"/"} className='text-purple-500'>Home</NavLink> / Add Course</p>
        </div>
      </div>
      <section>
        <div className='container'>
          <div className='grid place-items-center'>
            <form className="flex flex-col w-full px-2 xs:px-0 sm:w-1/2 lg:w-1/3 mx-auto shadow-lg lg:px-10 rounded-2xl">
              <h1 className='text-center text-2xl font-bold text-purple-500 py-3'>Add Course</h1>
              <input type="text" placeholder='Course Detail' className="border-[1px] p-2 rounded-md border-gray-300 outline-none mb-3" />
              <input type="submit" value="Add Course" className="mx-auto w-1/2 mb-3 bg-purple-500 text-white rounded-md py-2 " />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddCourse
