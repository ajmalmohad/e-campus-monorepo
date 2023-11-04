import React from 'react'
import {Button} from '@nextui-org/react'
import {Divider, Input} from '@nextui-org/react'
import {Textarea} from "@nextui-org/react"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function ApplicationDetails({ next }) {
  return (
    <div>
        <br/><h1 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>Application Details</h1>
        <br/><Divider />
        <div className='pt-4'>
            <Input className='pt-2 pb-4' labelPlacement="outside" type="text" label="Job Title" placeholder="Enter the job title" />
            <Textarea className='pb-4' minRows={10} maxRows={16} labelPlacement="outside" type="text" label="Job Description" placeholder="Enter the job description" />
            <div className='flex gap-2'>
            <div className='w-[100%]'>
            <Textarea className='pb-4' minRows={16} maxRows={16} labelPlacement="outside" type="text" label="Round Details" placeholder="Enter the round details" />   
            </div>
             <div className='px-2'>
                <p className='text-sm pb-2'>Last Date for Application</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar className="border solid rounded-lg" />
                </LocalizationProvider>
             </div>
            </div>
            <Button onClick={next}>Next</Button>
        </div>
    </div>
  )
}

export default ApplicationDetails