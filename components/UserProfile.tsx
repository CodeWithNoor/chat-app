"use client";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import "./styling/header.css";
import Image from "next/image";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

function UserProfile({
  name,
  image,
  className,
  session,
}: {
  name: string;
  image: string;
  className: string;
  session: Session | null;
}) {
  return (
    <>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="px-2">
              {image && (
                <>
                  <Image
                    src={`${session?.user?.image}`}
                    alt={`${session?.user?.name}`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </>
              )}
              <Avatar className={cn(className)}>
                {/* <AvatarImage src={"https://github.com/shadcn.png"} /> */}
                <AvatarFallback>
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-48 dark:bg-[#11182756] bg-white"
            id="account-dropdown"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                id="profile-link"
                className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
              >
                <User className="mr-2 h-4 w-4" />
                {/* <span>Profile</span> */}
                <span>{session?.user?.name}</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                id="profile-link"
                className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
                onClick={() => signOut()}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          className="my-1 mx-2 btn-hover color-9"
          onClick={() => signIn()}
        >
          SIGN IN
        </Button>
      )}
    </>
  );
}

export default UserProfile;
