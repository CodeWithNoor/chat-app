import React from "react";
import Link from "next/link";

const page = ({
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
  return (
    <>
      <div>
        <p className="text-muted font1-1">Chat</p>
        <Link href={"/"}>Go to Home</Link>
      </div>
    </>
  );
};

export default page;
