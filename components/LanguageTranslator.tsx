import React from "react";
import { BsTranslate } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function LanguageTranslator() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="px-2" variant="outline">
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
              <p>English</p>
            </DropdownMenuItem>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
            >
              <p>Arabic</p>
            </DropdownMenuItem>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
            >
              <p>Urdu</p>
            </DropdownMenuItem>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
            >
              <p>Spanish</p>
            </DropdownMenuItem>
            <DropdownMenuItem
              id="profile-link"
              className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
            >
              <p>Turkey</p>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
