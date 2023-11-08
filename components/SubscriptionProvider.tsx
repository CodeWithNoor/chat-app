"use client";
import React, { useEffect } from "react";
import { subscriptionRef } from "@/types/Subscription";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";

const SubscriptionProvider = () => {
  const { data: session } = useSession();
  useEffect(() => {
    // subscriptionRef.onSnapshot((snapshot: { empty: any }) => {
    //   if (snapshot.empty) {
    //     console.log("There has NO Subscription");
    //     return;
    //   } else {
    //     console.log("There has Subscription");
    //   }
    // });

    return onSnapshot(subscriptionRef(session?.user.id), (snapshot) => {
      if (snapshot.empty) {
        console.log("There has NO Subscription");
        return;
      } else {
        console.log("There has Subscription");
      }
    });
  }, []);

  return (
    <>
      <div>SubscriptionProvider</div>
    </>
  );
};

export default SubscriptionProvider;
