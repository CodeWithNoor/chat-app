"use client";
import React from "react";
// import { Skeleton } from "@/components/ui/skeleton";
// import Image from "next/image";
import { useSession } from "next-auth/react";
import { ChatMembers } from "@/lib/coverter/ChatMember";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { chatMembersCollectionGroupRef } from "@/lib/coverter/ChatMember";
import { MdOutlineMessage } from "react-icons/md";
import { Nunito } from "next/font/google";
import ChatListRow from "./ChatListRow";

const nunito = Nunito({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

const ChatRow = ({ initialChats }: { initialChats: ChatMembers[] }) => {
  console.log(initialChats, "initial chats in chat row");

  const { data: session } = useSession();

  const [members, loading, error] = useCollectionData<ChatMembers>(
    session && chatMembersCollectionGroupRef(session?.user?.id),
    {
      initialValue: initialChats,
    }
  );

  if (members?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center pt-40 space-x-2">
        <MdOutlineMessage className="h-10 w-10" />
        <h1 className={`text-5xl font-extralight ${nunito.className}`}>
          Welcome!
        </h1>
        <h1 className={`pb-10 ${nunito.className}`}>
          Let's Get Started By Creating Your First Chat...!{" "}
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="">
        {members?.map((members) => (
          <ChatListRow key={members.chatId} chatId={members.chatId} />
        ))}
      </div>
    </>
  );
};

export default ChatRow;
