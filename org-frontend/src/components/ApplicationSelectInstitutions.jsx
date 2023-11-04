import React from 'react'
import {Button} from '@nextui-org/react'

function ApplicationSelectInstitutions({ submit, prev }) {
  return (
    <div>
        ApplicationSelectInstitutions <br/>
        <Button onClick={prev}>Prev</Button>
    </div>
  )
}

export default ApplicationSelectInstitutions