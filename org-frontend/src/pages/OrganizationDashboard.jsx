import React from 'react'
import Search from '../components/Search'
import {Chip} from "@nextui-org/react";
import JobCard from '../components/JobCard';

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

        <div className="gap-4 grid grid-cols-4 sm:grid-cols-4">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
        </div>

      </div>
    </div>
  )
}

export default OrganizationDashboard