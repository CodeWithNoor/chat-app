import Image from "next/image";
// import homeBg from "../images/home-bg.avif";
import { Nunito } from "next/font/google";
import PaidIcon from "@mui/icons-material/Paid";
import { Button } from "@/components/ui/button";
import ChatImag from "@/images/chat.webp";
import Link from "next/link";
// import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

const nunito = Nunito({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session, "for home page");

  return (
    <main className="dark:bg-[#020817] h-screen">
      <div className="relative isolate pt-20 dark:bg-[#020817]">
        <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
            <div className="mx-auto max-w-2xl text-center">
              <h1
                className={`text-5xl text-center tracking-tighter sm:text-6xl ${nunito.className}`}
              >
                Chat With AnyOne!
              </h1>
              <p className="text-black dark:text-white my-6">
                <span>You Speak Your Language, They Speak their Language.</span>
                <br />
                <span className="text-[#6b62ee]">
                  Let AI Handle the Translation
                </span>
              </p>

              {/* I can't chatting becuase restricted to chat page if users is does'nt exsist add some logics then chatting */}
              <Link href={"/chat"}>
                <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-32">
                  <span>Get Started</span>
                </Button>
              </Link>

              <Link href={"/pricing"}>
                <Button className="btn-hover color-9 w-32">
                  <span>Pricing</span>
                  <PaidIcon className="text-2xl animate-bounce" />
                </Button>
              </Link>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-bg-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  unoptimized
                  src={ChatImag}
                  alt="home-bg"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-bg-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
