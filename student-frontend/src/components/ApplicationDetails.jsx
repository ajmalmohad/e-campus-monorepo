import React from 'react'
import {Button} from '@nextui-org/react'
import {Divider, Input} from '@nextui-org/react'
import {Textarea} from "@nextui-org/react"

function ApplicationDetails({ next }) {
  return (
    <div>
        <br/><h1 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>Instagram Placement Details</h1>
        <br/><Divider />
        <div className='pt-4'>
            <Input disabled value={"Front End Developer"} className='pt-2 pb-4' labelPlacement="outside" type="text" label="Job Title" placeholder="Enter the job title" />
            <Textarea disabled value={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure temporibus nostrum nisi sequi dolore iusto cumque eligendi illo adipisci nesciunt assumenda, fugit quaerat esse totam accusantium? Nobis explicabo ut facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure temporibus nostrum nisi sequi dolore iusto cumque eligendi illo adipisci nesciunt assumenda, fugit quaerat esse totam accusantium? Nobis explicabo ut facere.  Iure temporibus nostrum nisi sequi dolore iusto cumque eligendi illo adipisci nesciunt assumenda, fugit quaerat esse totam accusantium? Nobis explicabo ut facere. "} className='pb-4' minRows={5} maxRows={16} labelPlacement="outside" type="text" label="Job Description"/>
            <Textarea disabled value={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure temporibus nostrum nisi sequi dolore iusto cumque eligendi illo adipisci nesciunt assumenda, fugit quaerat esse totam accusantium? Nobis explicabo ut facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure temporibus nostrum nisi sequi dolore iusto cumque eligendi illo adipisci nesciunt assumenda, fugit quaerat esse totam accusantium? Nobis explicabo ut facere.  Iure temporibus nostrum nisi sequi dolore iusto cumque eligendi illo adipisci nesciunt assumenda, fugit quaerat esse totam accusantium? Nobis explicabo ut facere. "} className='pb-4' minRows={5} maxRows={16} labelPlacement="outside" type="text" label="Round Details"/>
            <Input disabled value={"12/06/2023"} className='pt-2 pb-4' labelPlacement="outside" type="text" label="Last Date for Application" />   
            <Button onClick={next}>Next</Button>
        </div>
    </div>
  )
}

export default ApplicationDetails