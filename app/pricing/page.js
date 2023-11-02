import React from 'react'
import { Nunito } from 'next/font/google'
// import Image from 'next/image'
// import homeBg from "../../images/home-bg.avif"
// import { FaArrowDownLong } from "react-icons/fa";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PricingCard from '@/components/pricingCard';

const nunito = Nunito({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
})

const page = () => {
  return (
    <div className='isolate overflow-hidden bg-[#020817]'>
      <div className="mx-auto max-w-7xl px-6 pb-72 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-base font-semibold leading-7 text-indigo-700 ">Pricing</h2>
          <p className={`m-2 text-4xl font-bold tracking-tight text-white sm:text-5xl ${nunito.className}`}>
            The Right Price for You.
            <br className='hidden sm:inline lg:hidden' />
            Whoever You Are.
          </p>
        </div>
        <div className="relative mt-6">
          <p className='mx-auto max-w-2xl text-lg leading-8 text-white/60'>
            Were 99% sure you will love our product. But if you dont, we offer a 30-day money-back guarantee.
          </p>

          {/* arrow */}
          <div className="mx-auto mt-9 animate-bounce w-11 h-11 text-white text-center " id="icon">
            <ExpandMoreIcon />
          </div>

          {/* radial gradient */}
          {/* <svg viewBox=' 0 0 1208 1024' className='absolute -t-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closed-side, white, transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0'>
            <ellipse
              cx={604}
              cy={512}
              rx={604}
              ry={512}
              fill='url(#radial-gradient-pricing)'
            />
            <defs>
              <radialGradient id="radial-gradient-pricing">
                <stop stopColor="#777506" />
                <stop offset="1" stopColor="#e935c1" />
              </radialGradient>
            </defs>
          </svg> */}
        </div>
      </div>

      {/* pricing card */}
      <div className="flow-root bg-white dark:bg-white pb-24 sm:pb-32">
        <div className="-mt-64">
          <PricingCard />
        </div>
      </div>
    </div>
  )
}

export default page