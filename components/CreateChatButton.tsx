"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineChat } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import useSubscriptionStore from "@/stores/useSubscriptionStore";

const CreateChatButton = () => {
  //   const router = useRouter();

  //    For Subscription Users Only
  //   const useSubscription = useSubscriptionStore((state) => state.useSubscription);
  const { data: session } = useSession();
  console.log(session?.user?.id);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {session?.user?.id ? (
        <Button
          variant="outline"
          size={"icon"}
          className="my-1 mx-2"
          id="icon"
          onClick={() =>
            toast({
              title: " Hurrah! ",
              description: " You are Registered For Chatting!!! Let's Chat ",
            })
          }
        >
          <Link href={"/chat"}>
            <MdOutlineChat className="text-4xl p-2" />
          </Link>
        </Button>
      ) : (
        <Button
          variant="outline"
          size={"icon"}
          className="my-1 mx-2"
          id="icon"
          onClick={() => {
            toast({
              description: "You are Not Registered For Chatting",
            });
          }}
        >
          <Link href={"/"}>
            <AccountCircleOutlinedIcon className="text-4xl p-2" />
          </Link>
        </Button>
      )}
    </>
  );
};

export default CreateChatButton;
