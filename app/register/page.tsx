import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { Nunito } from "next/font/google";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PricingCard from "@/components/pricingCard";

const nunito = Nunito({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

const page = async ({ name }: { name: string | null }) => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="isolate overflow-hidden bg-[#020817]">
      <div className="mx-auto max-w-7xl px-6 pb-80 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-base font-semibold leading-7 text-indigo-700 ">
            Let's Get Started
          </h2>
          <p
            className={`m-2 text-4xl font-bold tracking-tight text-white sm:text-5xl ${nunito.className}`}
          >
            Let's handle your membership {session?.user?.name?.split(" ")[0]}
            <br className="hidden sm:inline lg:hidden" />
          </p>
        </div>
        <div className="relative mt-6 mb-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Were 99% sure you will love our product. But if you don't, we offer
            a 30-days money-back guarantee.
          </p>

          {/* arrow */}
          <div
            className="mx-auto mt-9 animate-bounce w-11 h-11 text-white text-center "
            id="icon"
          >
            <ExpandMoreIcon />
          </div>
        </div>
      </div>

      {/* pricing card */}
      <div className="flow-root bg-white dark:bg-white pb-24 sm:pb-32">
        <div className="-mt-64 mx-auto flex items-center justify-center">
          <PricingCard redirect={false} />
        </div>
      </div>
    </div>
  );
};

export default page;
