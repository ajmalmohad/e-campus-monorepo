import React, { useState } from 'react'
import {Button, ButtonGroup, Chip} from "@nextui-org/react";
import {useParams} from 'react-router-dom'
import { Divider } from '@mui/material';

function ViewApplications({}) {
  let params = useParams();
  console.log(params.jobId);
  let [current, setCurrent] = useState(1);
  let [accepted, setAccepted] = useState(['Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal']);
  let [rejected, setRejected] = useState(['Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal']);
  let [waitinglist, setWaiting] = useState(['Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal', 'Ajmal']);

  let changeList = (current) => {
        setCurrent(current);
  }

  return (
    <div>
        <ButtonGroup className='w-full'>
            <Button color="success">Accepted</Button>
            <Button color='danger'>Rejected</Button>
            <Button color='warning'>Waiting List</Button>
        </ButtonGroup>
        <div className='py-4'>
            {
                current === 1 ? <div>
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
                current === 2 ? <div>
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
                current === 3 ? <div>
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
                <></>
            }
        </div>
    </div>
  )
}

export default ViewApplications