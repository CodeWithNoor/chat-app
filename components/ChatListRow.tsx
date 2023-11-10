import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Skeleton } from "@/components/ui/skeleton";

const ChatListRow = ({ chatId }: { chatId: string }) => {
  console.log(chatId, "chatId");

  return (
    <>
      <h1>{chatId}</h1>
    </>
  );
};

export default ChatListRow;
