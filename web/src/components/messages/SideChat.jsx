import { useEffect, useState } from "react"
import messagesService from '@/services/messages'
import Message from "./Message"
import MessageForm from "./MessageForm"
import { format } from "date-fns";

// let initialDate = {
//   date:"dd/mmm/yyyy",
//   time:"hh:mm"
// }

function SideChat() {
  const [messages, setMessages] = useState([])
  // const [created, setCreated] = useState(initialDate)

  useEffect(() => {
    messagesService.list()
      .then((messagesResponse) => {
        setMessages(messagesResponse);
        // setCreated((prev) => prev.forEach(message))
        // {date: format(new Date(message?.createdAt), 'dd/MMM/yyyy'),
        // time: format(new Date(message?.createdAt), 'HH:mm')}
      })
      .catch(console.error)
  }, [])

  const handleNewMessage = (createdMessage) => {
    setMessages((prev) => [...prev, createdMessage])
  }

  function showDate() {
    return (format(new Date(), 'dd/MMM/yyyy'))
  }

  return (
    <div className="w-full h-full bg-darkGreen px-4 py-6 flex flex-col justify-between rounded-tl-[6rem]">
      <div>
        <h2 className="text-gray-200 text-center text-sizeSm3">{showDate()}</h2>
        <div className="flex flex-col overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-lightGreen mt-2">
          {messages.map((message, idx) => (
            <Message key={message.id} text={message.text} isEven={!(idx % 2)} owner={message.owner?.userAlias} image={message.owner?.image} time={message.createdAt}/>
          ))}
        </div>
      </div>
      <MessageForm onNewMessage={handleNewMessage} />
    </div>
  )
}

export default SideChat