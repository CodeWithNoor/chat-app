import React from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { getServerSession } from "next-auth";

const page = async ({
  name,
  chatreceived,
  chatsent,
  details,
}: {
  name: string;
  chatreceived: string;
  chatsent: string;
  details: string;
}) => {
  const session = await getServerSession();
  return (
    <>
      <div className="isolate overflow-hidden bg-[#020817] h-screen">
        <div className="mx-auto max-w-7xl px-6 pb-80 pt-24 text-center sm:pt-32 lg:px-8">
          <p className="text-muted font1-1 text-white">Chat</p>
          <Link href={"/"}>Go to Home</Link>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full bg-gray-500" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] bg-gray-500" />
              <Skeleton className="h-4 w-[200px] bg-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
