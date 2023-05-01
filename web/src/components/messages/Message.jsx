import React from 'react'
import orangeMessage from '@/assets/message_orange.png'
import redMessage from '@/assets/message_red.png'

function Message({ text, isEven }) {
  return (
    <article className={`w-48 relative ${isEven ? "self-start" : "self-end"}`}>
      <img src={isEven ? orangeMessage : redMessage} />  
      <p className={`absolute top-0 py-1 text-sizeSm3 ${isEven ? "text-lightOrange px-2" : "text-lightRed px-4"}`}>{text}</p>
    </article>
  )
}

export default Message