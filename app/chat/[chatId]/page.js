import React from 'react'

const page = (props) => {
    const id = props.params.chatId
    console.log(id)
  return (
    <h1>{id}</h1>
  )
}

export default page