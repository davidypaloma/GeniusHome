import React from 'react'
import orangeMessage from '@/assets/message_1.svg'
import redMessage from '@/assets/message_2.svg'


function Message({ text, isEven }) {
  return (
    <div className={`flex items-stretch mt-2 ${isEven ? "self-start flex-row-reverse" : "self-end flex-row"}`}>

      <div className='flex-col px-2'>
        <div className="bg-lightGreen h-8 w-8 rounded-full"></div>
        <h4 className="text-sizeSm3 text-primaryWhite">vickie</h4>
      </div>

      <article className="w-48 relative h-32">
        <img src={isEven ? orangeMessage : redMessage} className="h-full -mt-6" />
        <p className={`absolute top-0 py-2 text-sizeSm3 ${isEven ? "text-lightOrange pr-4 pl-3" : "text-lightRed pl-4 pr-3"}`}>{text}</p>
      </article>

    </div>
  )
}

export default Message