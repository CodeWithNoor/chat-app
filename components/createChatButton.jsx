"use client";
// import Link from "next/link";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import isLarge from "@/lib/utils/isLarge";
// import useSubscriptionStore from "@/stores/useSubscriptionStore";
import React, { useState } from "react";
import { MdOutlineChat } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { serverTimestamp, setDoc } from "firebase/firestore";
import { addChatRef } from "@/lib/coverter/ChatMember";

const CreateChatButton = () => {
    //   const useSubscription = useSubscriptionStore((state) => state.useSubscription);
    // console.log(session?.user?.id)

    const router = useRouter();
    const { data: session } = useSession();
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();
    const chatId = uuidv4();

    // const createNewChat = async () => {
    //     // debugger;

    //     setLoading(true);
    //     if (session?.user?.id) return;

    //     toast({
    //         title: " Hurrah! ",
    //         description: " You are Registered For Chatting!!! Let's Chat ",
    //         duration: 5000,
    //     });

    //     setDoc(addChatRef(chatId, session.user.id), {
    //         userId: session.user.id,
    //         email: session.user.email,
    //         timeStamp: serverTimestamp(),
    //         isAdmin: true,
    //         chatId: chatId,
    //         image: session.user.image || "",
    //     }).then(() => {
    //         toast({
    //             className: "bg-green-500 text-white dark:bg-green-500 dark:text-white",
    //             title: " Hurrah! ",
    //             description: " You are Registered For Chatting!!! Let's Chat ",
    //             duration: 5000,
    //         });
    //         router.push(`/chat/${chatId}`);
    //     }).catch((error) => {
    //         console.log(error);
    //         toast({
    //             className: "bg-red-500 text-white dark:bg-red-500 dark:text-white",
    //             title: " Oops! ",
    //             description: " Something Went Wrong!!! ",
    //             duration: 5000,
    //         });
    //     }).finally(() => {
    //         setLoading(false);
    //     });

    //     // router.push(`/chat/${chatId}`);
    //     // check if user is pro or limited
    // };

    const createNewChat = async () => {
        setLoading(true);
        if (!session.user.id) {
            toast({
                className: "bg-red-500 text-white dark:bg-red-500 dark:text-white",
                title: " Oops! ",
                description: " User ID not found. Something Went Wrong!!! ",
                duration: 5000,
            });
            setLoading(false);
            return;
        }

        try {
            await setDoc(addChatRef(chatId, session.user.id), {
                userId: session.user.id,
                email: session.user.email,
                timeStamp: serverTimestamp(),
                isAdmin: true,
                chatId: chatId,
                image: session.user.image || "",
            });

            toast({
                className: "bg-green-500 text-white dark:bg-green-500 dark:text-white",
                title: " Hurrah! ",
                description: " You are Registered For Chatting!!! Let's Chat ",
                duration: 5000,
            });

            router.push(`/chat/${chatId}`);
        } catch (error) {
            console.log(error);

            toast({
                className: "bg-red-500 text-white dark:bg-red-500 dark:text-white",
                title: " Oops! ",
                description: " Something Went Wrong!!! ",
                duration: 5000,
            });
        } finally {
            setLoading(false);
        }
    };


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
