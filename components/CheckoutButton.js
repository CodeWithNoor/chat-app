"use client"
import React, { useState } from "react";
import { db } from "@/firebase";
import { onSnapshot } from "firebase/firestore";
import { Button } from "@/components/ui/button"

// 2:30 to 3:00 again re watch the video because setup in payment and language translator

const CheckoutButton = () => {
  const { loading, setLoading } = useState(true);

  const createCheckoutSession = async () => {
    console.log("You clicked me at checkout for premium")

    alert("You clicked me at checkout for premium")

    const docRef = await addDoc(collection(db, 'customers', session.user.id, 'checkout_sessions'), {
      // TODO: ADD PRICE ID
      price: 'price_1JGcX7Jp9gjY4X7d8c6Ij7gk',
      success_url: window.location.origin, // redirect back to the original location
      cancel_url: window.location.origin,
    });

    // console.log(docRef);
    return onSnapshot(docRef, async (snap) => {
      const url = await snap.data()?.url;
      const error = await snap.data()?.error;

      // if url is available, redirect to checkout
      if (url) {
        // redirect to checkout
        window.location.assign(url);
        setLoading(false);
      }

      // if some error occurs
      if (error) {
        alert(`An error occured: ${error.message}`);
        setLoading(false);
      }
    });
  }

  return <>
    <Button
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 mt-12
      hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 text-white dark:text-white" onClick={createCheckoutSession}
    >
      {loading ? 'Loading...' : 'Get Premium'}
    </Button>
  </>;
};

export default CheckoutButton;
