"use client";
import React, { useState } from "react";
// import { onSnapshot } from "firebase/firestore";
import { Button } from "@/components/ui/button"
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { useSession } from "next-auth/react";

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);
  const session = useSession();
  console.log(session.data, "data") // data is undefined because setup in firebase extension is not done yet


  const createCheckoutSession = async () => {
    const docRef = await addDoc(collection(db, 'customers', session.user.id, 'checkout_sessions'), {
      mode: process.env.FIREBASE_PAYMENT_MODE, // subscription or payment (one time payment) || client SDK firebase extension
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
          window.location.assign(url);  // navigates to given url
          setLoading(true)
        }
      } catch (error) {
        console.log("Error in checkout for premium users error")
      }
    })
  }
  return (
    <>
      {loading ?
        <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 mt-12 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 text-white dark:text-white" onClick={() => createCheckoutSession()} disabled>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4335 4335" className="animate-spin h-5 w-5 mr-3 fill-[#fff]">
            <path fill="#ffffff" d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"
            />
          </svg>
          Loading...
        </Button>
        :
        <Button
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 mt-12 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 text-white dark:text-white" onClick={() => createCheckoutSession()}
        >SIGNUP </Button>
      }
    </>
  )
};

export default CheckoutButton;
