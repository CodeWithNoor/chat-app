import React from "react";
// import { Skeleton } from "@/components/ui/skeleton"
// import { useSession } from "next-auth/react";
import ChatRow from "./ChatRow";
import { chatMembersCollectionGroupRef } from "@/lib/coverter/ChatMember";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { getDocs } from "firebase/firestore";

const ChatList = async () => {
  const session = await getServerSession(authOptions);

  // get all chats where user is a member
  const chatSnapshot = await getDocs(
    chatMembersCollectionGroupRef(session?.user?.id)
  )

  const initialChats = chatSnapshot.docs.map((doc) => ({
    // id: doc.id,
    ...doc.data(),
    timeStamp: null
  }));
  // console.log(initialChats, "initialChats");

  return (
    <>
      <ChatRow initialChats={initialChats} />
    </>
  )
};

export default ChatList;
