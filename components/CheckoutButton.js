"use client";
import React, { useState } from "react";
import { db } from "@/firebase";
// import { onSnapshot } from "firebase/firestore";
import { Button } from "@/components/ui/button"

// 2:30 to 3:00 again re watch the video because setup in payment and language translator

const CheckoutButton = () => {
  const { loading, setLoading } = useState(true);

  const createCheckoutSession = async () => {
    console.log("You clicked me at checkout for premium")

    alert("You clicked me at checkout for premium")

    const docRef = await addDoc(collection(db, 'customers', session.user.id, 'checkout_sessions'), {
      // TODO: ADD PRICE ID
      mode: "subscription_pro_membership", // subscription or payment (one time payment) || client SDK firebase extension
      price: 'price_1JGcX7Jp9gjY4X7d8c6Ij7gk', // stripe price id if you are using firebase extension to create products
      trial_from_plan: false, // if you want to give trial to your users
      alow_promotion_codes: true, // if you want to allow promotion codes, coupons && discount codes
      success_url: window.location.origin, // redirect back to the original location
      cancel_url: window.location.origin,
    });

    // console.log(docRef);
    docRef.onSnapshot((snap) => {
      try {
        const { error, url } = snap.data();
        if (error) {
          alert(`An error occured: ${error.message}`);
        }

        if (url) {
          window.location.assign(url);
        } else {
          console.log("No URL found!!! Something went wrong")
        }
      } catch (error) {
        console.log("Error in checkout button for premium users", error)
      }
    })
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
