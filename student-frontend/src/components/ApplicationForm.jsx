import React, { useState } from 'react'
import {Button} from '@nextui-org/react'
import {Input} from "@nextui-org/react";
import { Divider } from '@mui/material';

function ApplicationForm({ submit, prev, fields, data }) {


  return (
    <div>
        <br/><h1 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>Create Student Form</h1>
        <br/><Divider />
        <div className='pt-4 px-4'>
            <div>
                { console.log(data) }
                {
                    fields.map((item) => {
                       return <div className='flex py-2 items-center gap-2' key={item}>
                            <Input type='text' defaultValue={data[item.toLowerCase().split(" ").join("")]} label={item} />
                       </div>
                    })
                }
            </div>
            <div className='flex gap-4 mt-2'>
                <Button onClick={prev}>Prev</Button>
                <Button color='success' onClick={submit}>Submit</Button>
            </div>
        </div>
    </div>
  )
}

export default ApplicationForm