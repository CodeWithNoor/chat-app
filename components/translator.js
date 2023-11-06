"use client"
import React from 'react'
import { BsTranslate } from 'react-icons/bs'
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

const Translator = () => {
    return (
        <>
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
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            id="profile-link"
                            className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
                        >
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            id="profile-link"
                            className="hover:bg-gray-900 hover:dark:bg-[#ffffff44]"
                        >
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Billing</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default Translator