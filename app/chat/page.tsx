import React from "react";
// import { Skeleton } from "@/components/ui/skeleton";
import { getServerSession } from "next-auth";
import { Nunito } from "next/font/google";
import Link from "next/link";
// import { Button } from "@/components/ui/button";

const nunito = Nunito({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

const Chat = async () => {
  debugger;
  const session = await getServerSession();
  console.log("session for chat page", session);

  return (
    <>
      <div className="isolate overflow-hidden bg-[#020817] h-screen">
        <div className="mx-auto max-w-7xl px-6 pb-80 pt-24 text-center sm:pt-32 lg:px-8">
          <h1 className={`text-muted text-3xl text-white ${nunito.className}`}>
            Chat
          </h1>
          <Link href={"/"} className="my-1 mx-2 btn-hover color-9">
            Go to Home
          </Link>
          {/* <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full bg-gray-500" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] bg-gray-500" />
              <Skeleton className="h-4 w-[200px] bg-gray-500" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Chat;
