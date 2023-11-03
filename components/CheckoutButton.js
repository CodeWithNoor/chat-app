import React from "react";
import Link from "next/link";

const CheckoutButton = () => {
  return <>
    <button
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 mt-12
                   hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 text-white dark:text-white"
    >
      <Link href={"/"}>
        Get Pro
      </Link>
    </button>
  </>;
};

export default CheckoutButton;
