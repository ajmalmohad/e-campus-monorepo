import React from 'react'
import {Button} from '@nextui-org/react'

function ApplicationDetailsForm({ next, prev }) {
  return (
    <div>
        ApplicationDetailsForm <br/>
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
    </div>
  )
}

export default ApplicationDetailsForm