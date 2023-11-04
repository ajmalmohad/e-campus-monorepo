import React from 'react'
import {Button} from '@nextui-org/react'

function ApplicationSelectInstitutions({ submit, prev }) {
  return (
    <div>
        <h1 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>Select Institutions</h1>
        <Button onClick={prev}>Prev</Button>
    </div>
  )
}

export default ApplicationSelectInstitutions