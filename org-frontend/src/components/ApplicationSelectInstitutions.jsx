import React, {useEffect, useState} from 'react'
import {Button} from '@nextui-org/react'
import { Divider } from '@mui/material'
import {CheckboxGroup} from "@nextui-org/react";
import {CustomCheckbox} from "./CustomCheckBox.jsx";
import {apiUrl} from './../api/api.js'


function ApplicationSelectInstitutions({ submit, prev, groupSelected, setGroupSelected }) {

    let [colleges, setColleges] = useState([]);

    useEffect(()  =>  {
       fetch(`${apiUrl}/api/colleges`).then((response) => {
            response.json().then((result) => {
                result = result.data.map((item) => {
                    return {
                        id: item.id,
                        name: item.attributes.collegeName,
                        mail: item.attributes.collegeMail,
                        tier: item.attributes.tier,
                    }
                })
                setColleges(result);
            })
       }).catch((err) => {
            console.log(err);
       })
    }, []);

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
                        colleges.map((item) => {
                            return <CustomCheckbox
                                key={item.id}
                                value={item.id}
                                user={{
                                    name: item.name,
                                    email: item.mail,
                                    status: `Tier ${item.tier}`
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