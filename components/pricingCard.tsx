import React from "react";
import { Nunito } from "next/font/google";
import Link from "next/link";

const tiers = [
  {
    title: "Free",
    id: "started",
    href: "#",
    description: " Get Chatting  Right Way With AnyOne Or Anywhere",
    features: [
      "20 Message chat limit in chats",
      "2 Collaborators",
      "3 Chats Room Limit",
      "24 Hours Support Response Time",
      "Support 2 Language",
    ],
  },
  {
    title: "Pro",
    id: "pro",
    href: "#",
    price: "$15",
    description: "Unlock the full potential with our Pro plan.",
    features: [
      "Unlimited Chats",
      "Unlimited Collaborators",
      "Unlimited Chat Rooms",
      "24/7 Support Response Within 1 hour",
      "Support 10 Language",
    ],
  },
];

const nunito = Nunito({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

export default function PricingCard() {
  return (
    <>
      <div className="max-auto grid max-w-md grid-cols-1 gap-8 lg:grid-cols-2 lg:max-w-4xl ">
        {tiers.map((tier, id) => (
          <div className="flex flex-col mx-2 justify-between rounded-3xl bg-white shadow-xl p-8 ring-1 ring-gray-900/10 sm:p-10">
            <div key={id}>
              <h3
                className={`text-base text-semibold text-[#0ea5e9] ${nunito.className}`}
              >
                {tier.title}
              </h3>

              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.price ? (
                  <span
                    className={`text-4xl font-extrabold text-gray-900 ${nunito.className}`}
                  >
                    {tier.price}
                    <span>/month</span>
                  </span>
                ) : (
                  <p className="text-4xl font-extrabold text-gray-900">Free</p>
                )}
              </div>

              <p className="mt-6 text-base font-bold text-[#0ea5e9]">
                {tier.description}
              </p>
              <div>
                {tier.features.map((item, id) => (
                  <>
                    <span
                      key={id}
                      className="flex h-2 w-2 translate-y-5 rounded-full bg-sky-500"
                    />
                    <div className="space-x-7"></div>
                    <p className="text-base text-gray-500 my-1 ml-7">{item}</p>
                  </>
                ))}
              </div>

              <button
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 mt-12
               hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500"
              >
                {tier.id === "started" ? (
                  <Link href="/">Get Started</Link>
                ) : (
                  <Link href="https://tailwindcss.com/docs/gradient-color-stops">
                    Get Pro
                  </Link>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
