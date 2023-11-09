"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineChat } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { v4 as uuidv4 } from "uuid";
import { serverTimestamp, setDoc } from "firebase/firestore";
import { addChatRef } from "@/lib/coverter/ChatMember";
// import isLarge from "@/lib/utils/isLarge";
// import useSubscriptionStore from "@/stores/useSubscriptionStore";

const CreateChatButton = () => {
    const router = useRouter();
    //   const useSubscription = useSubscriptionStore((state) => state.useSubscription);
    const { data: session } = useSession();
    console.log(session?.user?.id);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    console.log(session?.user?.id)
    console.log(uuidv4)

    const createNewChat = async () => {
        setLoading(true);
        if (session?.user?.id) return;

        toast({
            title: " Hurrah! ",
            description: " You are Registered For Chatting!!! Let's Chat ",
            duration: 5000,
        });

        const chatId = uuidv4();
        await setDoc(addChatRef(chatId, session.user.id), {
            userId: session.user.id,
            email: session.user.email,
            timeStamp: serverTimestamp(),
            isAdmin: true,
            chatId: chatId,
            image: session.user.image || "",
        }).then(() => {
            toast({
                className: "bg-green-500 text-white",
                title: " Hurrah! ",
                description: " You are Registered For Chatting!!! Let's Chat ",
                duration: 5000,
            });
        }).catch((err) => {
            toast({
                className: "bg-red-500 text-white",
                title: " Oops! ",
                description: " Something Went Wrong!!! ",
                duration: 5000,
            });
        }).finally(() => {
            setLoading(false);
        });

        router.push(`/chat/${session?.user?.id}`);

        // check if user is pro or limited
    };

    if ('isLarge')
        return (
            <div>
                <Button
                    size={"icon"}
                    className="my-1 mx-2"
                    id="icon"
                    onClick={createNewChat}
                >
                    <MdOutlineChat className="text-4xl p-2" />
                </Button>
            </div>
        );

    return (
        <div>
            <Button
                size={"icon"}
                className="my-1 mx-2"
                id="icon"
                onClick={createNewChat}
            >
                <MdOutlineChat className="text-4xl p-2" />
            </Button>
        </div>
    );
};

export default CreateChatButton;
