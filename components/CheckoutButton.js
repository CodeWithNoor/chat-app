"use client";
import React, { useState } from "react";
import { db } from "@/firebase";
// import { onSnapshot } from "firebase/firestore";
import { Button } from "@/components/ui/button"
import { addDoc } from "firebase/firestore";

// 2:30 to 3:00 again re watch the video because setup in payment and language translator

const CheckoutButton = () => {
  const { loading, setLoading } = useState(true);

  const createCheckoutSession = async () => {
    // console.log("You clicked me at checkout for premium")
    // alert("You clicked me at checkout for premium")

    const docRef = await addDoc(collection(db, 'customers', session.user.id, 'checkout_sessions'), {
      // TODO: ADD PRICE ID
      // mode, trial_from_plan, allow_promotions_codes ---> this is not a part of tut it's my own logic
      mode: process.env.FIREBASE_MODE, // subscription or payment (one time payment) || client SDK firebase extension
      price: process.env.STRIPE_SECRET_KEY, // stripe price id if you are using firebase extension to create products || 'price_stripe_id'
      trial_from_plan: false, // if you want to give trial to your users
      allow_promotion_codes: true, // if you want to allow promotion codes, coupons && discount codes
      success_url: window.location.origin, // redirect back to the original location
      cancel_url: window.location.origin,
    });

    // console.log(docRef);
    docRef.onSnapshot((snap) => {
      try {
        const { error, url } = snap.data();
        if (error) {
          alert(`An error occured: ${error.message}`);
          setLoading(false)
        }

        if (url) {
          window.location.assign(url);  // navigates to givrn url
          setLoading(false)
        } else {
          console.log("No URL found!!! Something went wrong")
        }
      } catch (error) {
        console.log("Error in checkout button for premium users", error)
      }
    })
  }

  return <>
    {
      loading ? <Button
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 mt-12
    hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 text-white dark:text-white" onClick={createCheckoutSession}
      >
        loading...
      </Button> :
        <Button
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 mt-12
      hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 text-white dark:text-white" onClick={createCheckoutSession}
        >
          Get Premium
        </Button>
    }

  </>;
};

export default CheckoutButton;
