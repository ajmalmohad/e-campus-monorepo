import React, {useState} from 'react'
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import {Switch, Button} from "@nextui-org/react";

function NoticeBoard() {
    
    const [isSelected, setIsSelected] = useState(false);
    const [placement, setPlacement] = useState(["Front End Intern  @ X", "Front End Developer @ Instagram"]);
    const [notification, setNotification] = useState(["Tommorow is Holiday", "College Celebrates Union day Tommorow"]);

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
                    placement.map((item) => {
                        return  <div key={item} className='width-[100%]'>
                            <div className='flex justify-between items-center border solid rounded-xl p-4 my-2 width-[100%]'>
                                <div>
                                    <p>{item}</p>
                                    <p className='text-gray-600'>Last Date: 29/6/2023</p>
                                </div>
                                <Button color='success' variant="bordered">Apply</Button>
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