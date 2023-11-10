"use client";
import React, { useState, useEffect } from "react";
import { RiRadioButtonLine } from "react-icons/ri";
// import { addChatRef } from "@/lib/coverter/ChatMember";
// import { chatMembersAdminRef } from "@/lib/coverter/ChatMember"
// import firebase from "@/firebase";

const OnlineStatus = ({ userId }) => {
  console.log("userId for Online Notify", userId)
  const [online, setOnline] = useState(false);

  // const StatusNotifyIsAdmin = async () => {
  //   const db = firebase.firestore();
  //   let docRef = db.collection("chats").doc(chatId)

  //   docRef = chatMembersAdminRef(chatId);
  //   let docSnap = await docRef.data();
  //   console.log("docSnap", docSnap)

  //   if (docSnap.exists()) {
  //     console.log("Document data of chatId", docSnap.data());
  //     setOnline(true);
  //   } else {
  //     console.log("No such document of chatId!");
  //     setOnline(false);
  //   }
  // }


  useEffect(() => {
    // StatusNotifyIsAdmin();
    if (userId) {
      setOnline(true);
      return;
    } else {
      setOnline(false);
    }
  }, []);

  return <>{
    online ?
      <><RiRadioButtonLine className="mr-2 h-4 w-4 text-green-500" /><p>Online</p></> :
      <><RiRadioButtonLine className="mr-2 h-4 w-4 text-red-500" /><p>Offline</p></>
  }</>;
};

export default OnlineStatus;




