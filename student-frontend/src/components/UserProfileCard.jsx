import React from "react";
import {Card, CardHeader, CardBody, Avatar, Input, Textarea} from "@nextui-org/react";
import Logo from './../assets/CompanyLogo.jpg'

export default function UserProfileCard() {
  return (
    <Card>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="xl" src={Logo} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Ajmal Moha'd</h4>
            <h5 className="text-small tracking-tight text-default-400">@ajmalmohad</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 pb-3 text-small text-default-400">
        <Input className="py-2" type={"text"} value={"Jyothi Engineering College"} label={"College Name"} disabled/>
        <Textarea className="py-2" type={"text"} value={"123 Main Street, Apt 4B, Building A Oak Tree Gardens CondominiumsSouthville, District HeightsSunnydale County Los Angeles, California 90001-1234 United States of America"} label={"Candidate Address"} disabled/>
        <Input className="py-2" type={"text"} value={"Pikachu@thunderbolt.com"} label={"Candidate E-mail"} disabled/>
        <Input className="py-2" type={"text"} value={"+1 4206923329"} label={"Candidate Phone Number"} disabled/>
      </CardBody>
    </Card>
  );
}