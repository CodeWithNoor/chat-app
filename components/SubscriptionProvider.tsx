"use client";
import React, { useEffect } from "react";
import { subscriptionRef } from "@/types/Subscription";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";

const SubscriptionProvider = () => {
  const { data: session } = useSession();
  useEffect(() => {
    return onSnapshot(subscriptionRef(session?.user.id), (snapshot) => {
      if (snapshot.empty) {
        console.log("There has NO Subscription");
        return;
      } else {
        console.log("There has Subscription");
      }
    });
  }, [session]);

  return (
    <>
      <div>SubscriptionProvider</div>
    </>
  );
};

export default SubscriptionProvider;
