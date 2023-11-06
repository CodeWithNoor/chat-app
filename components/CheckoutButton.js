"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase";

// 2:30 to 3:00 again re watch the video because setup in payment and language translator

const CheckoutButton = () => {
  const router = useRouter();

  const createCheckoutSession = async () => {
    const docRef = await addDoc(collection(db, 'customers', session.user.id, 'checkout_sessions'), {
      // TODO: ADD PRICE ID
      price: 'price_1JGcX7Jp9gjY4X7d8c6Ij7gk',
      success_url: window.location.origin, // redirect back to the original location
      cancel_url: window.location.origin,
    });
  }

  return <>
    <button
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 mt-12
      hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 text-white dark:text-white" onClick={createCheckoutSession}
    >
      Get Pro
    </button>
  </>;
};

export default CheckoutButton;
