import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { IoIosCreate } from 'react-icons/io'
import { BiSolidUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Logo from './../assets/image 3.png'
import { RiLogoutBoxRFill } from 'react-icons/ri'

function Sidebar() {
  return (
    <div className='h-full min-h-[100vh] w-full p-4 border-r-2 flex flex-col space-between'>
        <div className='h-full'>
          <div className='flex px-2 pb-4 items-center'><img src={Logo} className='h-[30px]'/></div>
          <div className='py-2 bg-blue'>
              <Link to="/"><div className='cursor-pointer flex items-center p-4 rounded hover:bg-[#695dff] hover:text-white font-medium'> <AiFillHome className='mr-2'/>Dashboard</div></Link>
              <Link to="/create-job"><div className='cursor-pointer flex items-center p-4 rounded hover:bg-[#695dff] hover:text-white font-medium'> <IoIosCreate className='mr-2'/>Create Job Opening</div></Link>
              <Link to="/profile"><div className='cursor-pointer flex items-center p-4 rounded hover:bg-[#695dff] hover:text-white font-medium'> <BiSolidUser className='mr-2'/>Profile</div></Link>
          </div>
        </div>
        <div>
          <div className='cursor-pointer flex items-center p-4 rounded hover:bg-[#f31260] hover:text-white font-medium'> <RiLogoutBoxRFill className='mr-2'/>Logout</div>
        </div>
    </div>
  )
}

export default Sidebar