import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Input, Textarea} from "@nextui-org/react";
import Logo from './../assets/CompanyLogo.jpg'

export default function ProfileCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={Logo} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">X</h4>
            <h5 className="text-small tracking-tight text-default-400">@x</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 pb-3 text-small text-default-400">
        <Input className="py-2" type={"text"} value={"X"} label={"Company Name"} disabled/>
        <Textarea className="py-2" type={"text"} value={"X Inc. is a social media company that provides online social networking and microblogging services. The company allows users to follow other users' activity, read, and post tweets. Tweets are micro-blogs of up to 280 characters. Users can read and post tweets through the web, short message service (SMS), and mobile applications. X, Inc. was based in San Francisco, California. The company previously operated the Vine short video app and Periscope livestreaming service"} label={"Company Description"} disabled/>
        <Input className="py-2" type={"text"} value={"info@x.com"} label={"Company Email"} disabled/>
      </CardBody>
    </Card>
  );
}
