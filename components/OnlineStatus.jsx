"use client";
import React, { useState, useEffect } from "react";
import { RiRadioButtonLine } from "react-icons/ri";
// import { addChatRef } from "@/lib/coverter/ChatMember";
// import { chatMembersAdminRef } from "@/lib/coverter/ChatMember"

const OnlineStatus = ({ userId }) => {
  console.log("userId for Online Notify", userId)
  const [online, setOnline] = useState(false);

  // const StatusNotifyIsAdmin = async () => {
  //   const docRef = chatMembersAdminRef(userId);
  //   const docSnap = await docRef.get();
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     setOnline(true);
  //   } else {
  //     console.log("No such document!");
  //     setOnline(false);
  //   }
  // }

  useEffect(() => {
    if (userId) {
      setOnline(true);
      return;
    } else {
      setOnline(false);
    }
  }, [userId]);

  return <>{
    online ?
      <><RiRadioButtonLine className="mr-2 h-4 w-4 text-green-500" /><p>Online</p></> :
      <><RiRadioButtonLine className="mr-2 h-4 w-4 text-red-500" /><p>Offline</p></>
  }</>;
};

export default OnlineStatus;




