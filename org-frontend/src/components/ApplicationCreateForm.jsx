import React from 'react'
import {Button} from '@nextui-org/react'
import {Input} from "@nextui-org/react";

function ApplicationCreateForm({ next, prev }) {
  return (
    <div>
        <h1 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>Create Student Form</h1>
        <div className='pt-4'>
            <Button onClick={prev}>Prev</Button>
            <Button onClick={next}>Next</Button>
        </div>
    </div>
  )
}

export default ApplicationCreateForm