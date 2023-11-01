import { DarkModeToggle } from "./DarkMode";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/images/logo-svg.svg";
import { MdOutlineChat } from "react-icons/md";
import { BsTranslate } from "react-icons/bs";
import PaidIcon from "@mui/icons-material/Paid";
import { Button } from "./ui/button";
import UserProfile from "./UserProfile";
import { Nunito } from "next/font/google";
import { getServerSession } from "next-auth";
import "./styling/header.css";

const nunito = Nunito({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

const Header = async () => {
  const session = await getServerSession();
  console.log(session);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#fff] dark:bg-gray-900 border-b-2 border-[#88888821] dark:border-sky-500">
        <nav
          className="flex flex-col justify-between sm:flex-row items-center px-5 py-3 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto"
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
          <div className="flex items-center justify-end space-x-2">
            {/* chat */}
            <Button size={"icon"} className="text-2xl">
              {/* <MdOutlineChat /> */}
              <BsTranslate />
            </Button>

            {/* session if user logged in or not */}
            {session ? (
              <Button size={"icon"} className="text-2xl">
                <div
                  className="bg-[#00ff40] rounded-full w-2 h-2"
                  id="notification"
                ></div>
                <MdOutlineChat />
              </Button>
            ) : (
              <Link href={"/pricing"} prefetch={false}>
                <Button size={"icon"} className="text-2xl">
                  <div
                    className="bg-[#ff0000] rounded-full w-[20px] h-[5px]"
                    id="notification"
                  ></div>
                  <PaidIcon className="text-4xl" />
                </Button>
              </Link>
            )}

            {/* dark mode toggle */}
            <DarkModeToggle />

            {/* avatar */}
            {/* 1- user image */}
            {/* 2- user profile */}
            {/* 3- user info */}
            <UserProfile
              name={""}
              image={"https://github.com/shadcn.png"}
              className={""}
              session={null}
            />
          </div>
        </nav>
        {/* banner upgrade pro */}
      </header>
    </>
  );
};

export default Header;
