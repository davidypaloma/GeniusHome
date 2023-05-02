import { useEffect, useState } from "react"
import messagesService from '@/services/messages'
import Message from "./Message"
import MessageForm from "./MessageForm"


function SideChat() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    messagesService.list()
      .then((messagesResponse) => {
        setMessages(messagesResponse);
      })
      .catch(console.error)
  }, [])

  const handleNewMessage = (createdMessage) => {
    setMessages((prev) => [createdMessage, ...prev])
  }

  return (
    <div className="w-full h-full bg-darkGreen px-4 py-6 flex flex-col justify-between rounded-tl-[6rem]">
      <div>
        <h2 className="text-gray-200 text-center">Today</h2>
        <div className="flex flex-col overflow-y-auto max-h-[31rem] scrollbar-thin scrollbar-thumb-lightGreen mt-2">
          {messages.map((message, idx) => (
            <Message key={message.id} text={message.text} isEven={!(idx % 2)} />
          ))}
        </div>
      </div>
      <MessageForm onNewMessage={handleNewMessage} />
    </div>
  )
}

export default SideChat