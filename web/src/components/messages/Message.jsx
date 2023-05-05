import React from 'react'
import yellowMessage from '@/assets/message_1.svg'
import redMessage from '@/assets/message_2.svg'
import { format } from "date-fns";
import { imageAvatar } from '../../utils/constants';


function Message({ text, owner, isEven, time, image, onMessageClick }) {

  function showTime() {
    return (format(new Date(time), 'dd/MMM HH:mm'))
  }



  return (
    <div className={`flex items-stretch mt-2 ${isEven ? "self-start flex-row-reverse" : "self-end flex-row"}`} onClick={onMessageClick}>

      <div className='flex-col px-2 relative'>
        <img></img>
        <div className="bg-lightGreen h-8 w-8 rounded-full "></div>
        <img src={imageAvatar[image]} alt={image} className="h-8 w-8 rounded-full absolute top-0" />
        <h4 className="text-sizeSm3 text-primaryWhite">{owner}</h4>
        <p className="text-sizeSm3 text-primaryWhite">{showTime()}</p>
      </div>

      <article className="w-48 relative h-32">
        <img src={isEven ? yellowMessage : redMessage} className="h-full -mt-6" />
        <p className={`absolute top-0 py-2 text-sizeSm3 ${isEven ? "text-lightYellow pr-4 pl-3" : "text-lightRed pl-4 pr-3"}`}>{text}</p>
      </article>

    </div>
  )
}

export default Message