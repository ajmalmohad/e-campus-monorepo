import React from 'react'
import {Button} from '@nextui-org/react'
import { Divider } from '@mui/material'
import {CheckboxGroup} from "@nextui-org/react";
import {CustomCheckbox} from "./CustomCheckBox.jsx";


function ApplicationSelectInstitutions({ submit, prev, groupSelected, setGroupSelected, institutions }) {

    console.log(institutions);
  return (
    <div>
        <br/><h1 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>Select Institutions</h1>
        <br/><Divider />
        <div className='py-2 px-4'>
            <div className="py-4 flex flex-col gap-1 w-full">
                <CheckboxGroup
                    label="Select Institutions"
                    value={groupSelected}
                    onChange={setGroupSelected}
                    classNames={{
                    base: "w-full"
                    }}
                >
                    {
                        institutions.map((item) => {
                            return <CustomCheckbox
                                value={item}
                                user={{
                                    name: item,
                                    username: item.toLowerCase().split(" ").join(""),
                                    status: "Tier 2",
                                }}
                                statusColor="secondary"
                            />
                        })
                    }
                    
                </CheckboxGroup>
            </div>
        
            <div className='flex gap-4'>
                <Button onClick={prev}>Prev</Button>
                <Button color='success' onClick={submit}>Submit</Button>
            </div>
        </div>
    </div>
  )
}

export default ApplicationSelectInstitutions