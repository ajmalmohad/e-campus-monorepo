import React, { useState } from 'react'
import {Button} from '@nextui-org/react'
import {Input} from "@nextui-org/react";
import { Divider } from '@mui/material';
import {GrClose} from 'react-icons/gr';
import {AiOutlinePlus} from 'react-icons/ai'

function ApplicationCreateForm({ next, prev, fields, setFields }) {

    let [ newField, setNewField ] = useState("");

    let deleteField = (current) => {
        console.log(current);
        let newFields = fields.filter((item)=>{ return item !== current });
        setFields(newFields);
    }

    let addField = (current) => {
        if(current !== "") {
            setFields([...fields, current]);
            setNewField("");
        }
    }

  return (
    <div>
        <br/><h1 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>Create Student Form</h1>
        <br/><Divider />
        <div className='pt-4 px-4'>
            <div>
                {
                    fields.map((item) => {
                       return <div className='flex py-2 items-center gap-2' key={item}>
                            <Input type='text' label={item} />
                            <div size='lg' className='rounded-full' onClick={()=>{deleteField(item)}}><GrClose /></div>
                       </div>
                    })
                }
            </div>
            <div className='flex py-4 gap-4 items-center'>
                <Input type='text' label="New Field Name" value={newField} onChange={(e)=>{setNewField(e.target.value)}}/>
                <div className='text-xl cursor-pointer' onClick={()=>{addField(newField)}}><AiOutlinePlus /></div>
            </div>
            <div className='flex gap-4'>
                <Button onClick={prev}>Prev</Button>
                <Button onClick={next}>Next</Button>
            </div>
        </div>
    </div>
  )
}

export default ApplicationCreateForm