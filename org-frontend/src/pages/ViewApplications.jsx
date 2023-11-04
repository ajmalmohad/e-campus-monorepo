import React, { useState } from 'react'
import {Button, ButtonGroup, Chip} from "@nextui-org/react";
import {useParams} from 'react-router-dom'
import { Divider } from '@mui/material';

function ViewApplications({}) {
  let params = useParams();
  console.log(params.jobId);
  let [current, setCurrent] = useState(1);
  let [accepted, setAccepted] = useState(['Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal']);
  let [rejected, setRejected] = useState(['John', 'John', 'John', 'John', 'John', 'John', 'John', 'John']);
  let [waitinglist, setWaiting] = useState(['Lamja', 'Lamja', 'Lamja', 'Lamja', 'Lamja', 'Lamja', 'Lamja', 'Lamja']);

  let changeList = (current) => {
        setCurrent(current);
  }

  return (
    <div>
        <ButtonGroup className='w-full'>
            <Button onClick={()=>{setCurrent(1)}}>Accepted</Button>
            <Button onClick={()=>{setCurrent(2)}}>Rejected</Button>
            <Button onClick={()=>{setCurrent(3)}}>Waiting List</Button>
        </ButtonGroup>
        <div className='py-4'>
            {
                current === 1 ? <div className='border solid rounded-xl'>
                    <div>
                        <div className='py-4 flex w-full'>
                            <p className='flex-1 flex w-full justify-center'>Name</p>
                            <p className='flex-1 flex w-full justify-center'>Gmail</p>
                            <div className='flex-1 flex w-full justify-center'>College</div>
                        </div>
                        <Divider/>
                    </div>
                    {
                        accepted.map((item, idx) => {
                            return <div>
                                <div key={item+idx} className='py-4 flex w-full'>
                                    <p className='flex-1 flex w-full justify-center'>{item}</p>
                                    <p className='flex-1 flex w-full justify-center'>ajmal@gmail.com</p>
                                    <div className='flex-1 flex w-full justify-center'><Chip>Jyothi Engineering College</Chip></div>
                                </div>
                                <Divider/>
                            </div>
                        })
                    }
                </div> :
                current === 2 ? <div className='border solid rounded-xl'>
                     <div>
                        <div className='py-4 flex w-full'>
                            <p className='flex-1 flex w-full justify-center'>Name</p>
                            <p className='flex-1 flex w-full justify-center'>Gmail</p>
                            <div className='flex-1 flex w-full justify-center'>College</div>
                        </div>
                        <Divider/>
                    </div>
                    {
                        rejected.map((item, idx) => {
                            return <div>
                                <div key={item+idx} className='py-4 flex w-full'>
                                    <p className='flex-1 flex w-full justify-center'>{item}</p>
                                    <p className='flex-1 flex w-full justify-center'>john@gmail.com</p>
                                    <div className='flex-1 flex w-full justify-center'><Chip>Jyothi Engineering College</Chip></div>
                                </div>
                                <Divider/>
                            </div>
                        })
                    }
                </div> :
                current === 3 ? <div className='border solid rounded-xl'>
                     <div>
                        <div className='py-4 flex w-full'>
                            <p className='flex-1 flex w-full justify-center'>Name</p>
                            <p className='flex-1 flex w-full justify-center'>Gmail</p>
                            <div className='flex-1 flex w-full justify-center'>College</div>
                        </div>
                        <Divider/>
                    </div>
                    {
                        waitinglist.map((item, idx) => {
                            return <div>
                                <div key={item+idx} className='py-4 flex w-full'>
                                    <p className='flex-1 flex w-full justify-center'>{item}</p>
                                    <p className='flex-1 flex w-full justify-center'>lamja@gmail.com</p>
                                    <div className='flex-1 flex w-full justify-center'><Chip>Jyothi Engineering College</Chip></div>
                                </div>
                                <Divider/>
                            </div>
                        })
                    }
                </div> :
                <></>
            }
        </div>
    </div>
  )
}

export default ViewApplications