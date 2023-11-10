"use client";
import React, { useState, useEffect } from "react";
// import { RiRadioButtonLine } from "react-icons/ri";
import { Skeleton } from "@/components/ui/skeleton"

const page = (props) => {
  const id = props.params.chatId;
  console.log(id)

  // const [online, setOnline] = useState(false);

  // useEffect(() => {
  //   if (chatId) {
  //     setOnline(true);
  //   } else {
  //     setOnline(false);
  //   }
  // }, [chatId]);
  
  return (
    <>
      <div className=" h-screen bg-white dark:bg-[#020817] p-24">
        <h1 className='text-black dark:text-white'>{id}</h1>
        <div className="flex items-center space-x-4">
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </div>
      </div>
    </>
  )
}

export default page





