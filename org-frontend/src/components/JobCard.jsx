import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Button, Image, Chip} from "@nextui-org/react";

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
        {status==="active" ? <Chip color="success" variant="solid">Active</Chip>: ""}
        {status==="closed" ? <Chip color="danger" variant="solid">Closed</Chip>: ""}
        {status!=="active" && status !=="closed" ? <Chip color="default" variant="solid">Draft</Chip>: ""}
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="line-clamp-4 text-sm text-gray-500">{description}</p>
      </CardBody>
      <Divider/>
      <CardFooter className="bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <Button className="text-tiny" variant="bordered" size="sm">
          View
        </Button>
        <Button className="text-tiny" variant="bordered" color="danger" size="sm">
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
