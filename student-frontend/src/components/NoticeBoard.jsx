import React, {useState} from 'react'
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import {Switch, Button} from "@nextui-org/react";
import { Link } from 'react-router-dom'

function NoticeBoard() {
    
    const [isSelected, setIsSelected] = useState(false);
    const [placement, setPlacement] = useState(["Front End Developer @ Instagram", "Front End Intern  @ X", "Front End Developer @ LinkedIn", "Back End Developer @ Canva",  "Software Developer @ Vanenberg",  "Back End Developer @ Meta"]);
    const [notification, setNotification] = useState(["Tommorow is Holiday", "College Celebrates Union day Tommorow", "Concession Cards can be collected from office now", "Library will not be available this week", "B. Tech Semester 7 Exam Regustrations Started"]);
    const colors = ["blue", "red", "green"]

  return (
    <div>
        <Card>
            <CardHeader className='flex justify-between'>
                {
                    isSelected ?
                    <h1 className='text-2xl font-semibold'>Placements</h1> :
                    <h1 className='text-2xl font-semibold'>Notice Board</h1> 
                }
                <Switch isSelected={isSelected} onValueChange={setIsSelected}/>
            </CardHeader>
            <CardBody className='width-[100%]'>
                {
                    isSelected ?
                    placement.map((item, i) => {
                        return  <div key={item} className='width-[100%]'>
                            <div className={`flex justify-between items-center border solid rounded-xl p-4 my-2 width-[100%]`}>
                                <div>
                                    <p>{item}</p>
                                    <p className='text-gray-600'>Last Date: 29/6/2023</p>
                                </div>
                                <Link to="/apply-job/x"><Button color='success' variant="bordered">Apply</Button></Link>
                            </div>
                        </div>
                    }):
                    notification.map((item) => {
                        return  <div key={item} className='width-[100%]'>
                            <div className='flex justify-between items-center border solid rounded-xl p-4 my-2 width-[100%]'>
                                <div>
                                    <p>{item}</p>
                                    <p className='text-gray-600'>Published: 29/6/2023</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </CardBody>
        </Card>
    </div>
  )
}

export default NoticeBoard