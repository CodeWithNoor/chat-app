"use client"
import React from "react";

const CheckoutButton = () => {
  const createCheckoutSession = async () => {
    console.log("createCheckoutSession");
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
