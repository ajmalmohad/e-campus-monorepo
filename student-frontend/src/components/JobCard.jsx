import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Button, Image, Chip} from "@nextui-org/react";
import {Link} from 'react-router-dom';

export default function JobCard({ icon, name, publishdate, description, status }) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex w-[100%] space-between">
        <div className="flex gap-3  w-[100%]">
            <Image
            alt="logo"
            height={40}
            radius="sm"
            src={icon}
            width={40}
            />
            <div className="flex flex-col">
            <p className="text-md">{name}</p>
            <p className="text-small text-default-500">Deadline: {publishdate}</p>
            </div>
        </div>
        {status==="open" ? <Chip color="success" variant="solid">Open</Chip>: ""}
        {status==="applied" ? <Chip color="danger" variant="solid">Applied</Chip>: ""}
        {status==="rejected" ? <Chip color="danger" variant="solid">Rejected</Chip>: ""}
        {status==="placed" ? <Chip color="danger" variant="solid">Placed</Chip>: ""}
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="line-clamp-4 text-sm text-gray-500">{description}</p>
      </CardBody>
      <Divider/>
      <CardFooter className="bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <Link to={`/apply-job/${name}`}><Button className="text-tiny" variant="bordered" color="success" size="sm">
          Apply
        </Button></Link>
      </CardFooter>
    </Card>
  );
}
