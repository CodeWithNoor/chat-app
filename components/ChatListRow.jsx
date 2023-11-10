import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const ChatListRow = ({ chatId }) => {
  console.log(chatId, "chatId")

  return (
    <>
    <h1>{chatId}</h1>
    </>
  )
}

export default ChatListRow