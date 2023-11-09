import { DarkModeToggle } from "./DarkMode";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/images/logo-svg.svg";
// import { MdOutlineChat, MdPaid } from "react-icons/md";
import { BsTranslate } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import UserProfile from "./UserProfile";
import { Nunito } from "next/font/google";
import { getServerSession } from "next-auth";
import "./styling/header.css";
import { authOptions } from "@/auth";
import CreateChatButton from "./createChatButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const nunito = Nunito({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <header
        id="header"
        className="sticky top-0 z-50 bg-[#fff] dark:bg-[#020817] border-b-2 border-[#88888821] dark:border-sky-500"
      >
        <nav
          className="flex flex-col justify-between sm:flex-row items-center px-5 py-3 pl-2 bg-white dark:bg-[#020817] max-w-7xl mx-auto"
          id="navbar"
        >
          {/***************** logo ************************/}
          <Link href="/" prefetch={false} className="overflow-hidden">
            <div className="w-74 h-18 flex items-center">
              <Image
                src={LogoImg}
                priority
                alt="Image"
                width={75}
                height={75}
                className="object-contain"
              />
              <span
                className={`text-dark text-xl ml-2 font-extrabold dark:text-white ${nunito.className}`}
              >
                ChatWithAnyOne
              </span>
            </div>
          </Link>

          {/***************** section-2 ************************/}
          <div className="flex items-center justify-end">
            {/* chat */}
            <Button size={"icon"} className="my-1 mx-2" id="icon">
              <BsTranslate className="text-4xl p-2" />
            </Button>

            {/* session if user logged in or not */}
            {session ? (
                <CreateChatButton />
            ) : (
              <Link href={"/pricing"} prefetch={false}>
                <Button size={"icon"} className="my-1 mx-2" id="icon">
                  <AccountCircleOutlinedIcon className="text-4xl p-2" />
                </Button>
              </Link>
            )}

            {/* dark mode toggle */}
            <div className="my-1 mx-2" id="icon">
              <DarkModeToggle />
            </div>

            {/* user profile */}
            <UserProfile
              name={""}
              image={"https://github.com/shadcn.png"}
              className={""}
              session={session}
            />
          </div>
        </nav>

        {/* banner */}
        {/* if user is no exsist then show banner is just example*/}
        {/* if user is not premium */}
        {!session ? (
          <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-50% to-indigo-500 to-90% py-1 px-4 text-center text-white">
            Unlock the power of ChatWithAnyOne If You Are Not A Premium Member
          </div>
        ) : (
          <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-50% to-indigo-500 to-90% py-1 px-4 text-center text-white">
            Unlock the power of ChatWithAnyOne If You Are A Premium Member
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
