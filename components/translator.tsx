"use client";
import React from "react";
import { BsTranslate } from "react-icons/bs";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const translator = () => {
  return (
    <>
      {/* setup firebase extension translator ai and stripe payment account to create and download firebase extension */}
      {/* firebase extension setup and stripe account setup ---> 2:30 to 3:00 */}
      {/* firebase support translate in any language by using AI */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="px-2">
            <BsTranslate className="text-4xl p-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-28 dark:bg-[#11182756] bg-white"
          id="account-dropdown"
        >
          <DropdownMenuLabel>Languages</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
            >
              <div>English</div>
            </DropdownMenuItem>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
            >
              <div>Arabic</div>
            </DropdownMenuItem>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
            >
              <div>Urdu</div>
            </DropdownMenuItem>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
            >
              <div>Spanish</div>
            </DropdownMenuItem>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
            >
              <div>Turkey</div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default translator;
