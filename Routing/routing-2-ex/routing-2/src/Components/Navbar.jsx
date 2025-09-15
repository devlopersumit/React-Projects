import React from 'react';
import { Link, NavLink, } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='w-full h-16 fixed top-0 bg-gray-500 flex justify-between items-center px-4 shadow-md'>
        <div className='text-white font-bold text-xl'>
          <h1 className='text-3xl ml-4 md:ml-[200px]'>Sumit <span className='text-green-500'>Jha</span></h1>
        </div>

        <div className='mr-4 md:mr-[250px] text-xl'>
            <ul className='flex gap-4 md:gap-20'>
                <li>
                   <NavLink to="/"
                   className={({isActive})=>
                   `${isActive ? "text-green-500" : "text-black"}`}>Home</NavLink> 
                </li>

                <li>
                   <NavLink to="/about"
                   className={({isActive})=>
                   `${isActive ? "text-green-500" : "text-black"}`}>About</NavLink> 
                </li>
            </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
