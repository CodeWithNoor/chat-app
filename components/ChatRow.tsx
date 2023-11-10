"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ChatRow = ({}) => {
  const { data: session } = useSession();
  console.log(session, "user session");

  return (
    <>
      <div>ChatRow</div>
      <div className="flex items-center space-x-4">
        <Skeleton
          className={`h-12 w-12 rounded-full bg-gray-500 dark:bg-gray-300`}
        >
          {session?.user?.image && (
            <Image
              src={`${session?.user?.image || ""}`}
              alt={`${session?.user?.name || ""}`}
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
        </Skeleton>
        <div className="space-y-2">
          <Skeleton className=" text-white dark:text-black h-4 w-[250px] bg-gray-500 dark:bg-gray-300">
            {/* {session?.user?.name} */}
          </Skeleton>
          <Skeleton className="h-4 w-[200px] bg-gray-500 dark:bg-gray-300" />
        </div>
      </div>
    </>
  );
};

export default ChatRow;
