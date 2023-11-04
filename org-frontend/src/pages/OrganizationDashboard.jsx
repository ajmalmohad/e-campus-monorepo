import React from 'react'
import Search from '../components/Search'
import {Chip} from "@nextui-org/react";

function OrganizationDashboard() {
  return (
    <div>
      <div>
        <Search className="w-full"/>
        <div className='filters py-4 flex gap-2'>
        <Chip color="warning" variant="solid" className='text-white cursor-pointer'>New</Chip>
        <Chip color="warning" variant="bordered" className='cursor-pointer'>A-Z</Chip>
        <Chip color="warning" variant="bordered" className='cursor-pointer'>Active</Chip>
        <Chip color="warning" variant="bordered" className='cursor-pointer'>Closed</Chip>
        <Chip color="warning" variant="bordered" className='cursor-pointer'>Draft</Chip>
        </div>
      </div>
    </div>
  )
}

export default OrganizationDashboard