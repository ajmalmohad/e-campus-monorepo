
import React from 'react';
import { Switch } from "@nextui-org/react";

function NoticeBoard() {
  return (
    <div className="w-auto flex flex-col rounded-lg bg-purple-100 shadow-md p-4 relative">
      <div className="flex justify-between items-center">
        <p className="text-black text-shadow mt-2 mr-2 text-2xl font-medium">
          NOTICE BOARD
        </p>
        <div className="mt-2">
          <Switch defaultSelected color="secondary">View Placements</Switch>
        </div>
      </div>
      <div className="flex flex-col mt-4">
       
          <div className="w-full p-2 flex-col">
            <p className='font-roboto text-base font-normal leading-6'>
            Job Title 1 : Last Date MM/DD/YYYY             
            </p>
            <div className='right-0'>
            Job Description Job Description Job Description Job Description 
            </div>
            
          </div>
          <div className="w-full p-2 flex-col">
          <p className='font-roboto text-base font-normal leading-6'>
            Job Title 2 : Last Date MM/DD/YYYY
            </p>
            <div className='right-0'>
            Job Description Job Description Job Description Job Description 
            </div>
          </div>
      </div>
    </div>
  )
}

export default NoticeBoard;
