"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, LogOut, User } from "lucide-react";
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
import { signIn } from "next-auth/react";

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
  if (!session) {
    return (
      <Button
        className="bg-black text-white hover:bg-black dark:bg-white dark:text-black"
        onClick={() => signIn()}
      >
        SIGN IN
      </Button>
    );
  } 

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            {image && (
              <>
                <Image
                  src={image || ""}
                  alt={name || ""}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </>
            )}
            <Avatar className={cn("", className)}>
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
          className="w-28 dark:bg-[#11182756]"
          id="account-dropdown"
        >
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff69]"
            >
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff69]"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff69]"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default UserProfile;
