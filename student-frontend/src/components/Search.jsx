import React from "react";
import {Input} from "@nextui-org/react";

export default function Search() {
  return (
    <div className="w-full">
        <Input size="lg" type="email" variant="bordered" placeholder="Search..." />
    </div>  
  );
}
