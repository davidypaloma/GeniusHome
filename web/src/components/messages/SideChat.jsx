import { useEffect, useState, useRef } from "react"
import messagesService from '@/services/messages'
import Message from "./Message"
import MessageForm from "./MessageForm"
import { format } from "date-fns";


function SideChat() {
  const [messages, setMessages] = useState([])
  const containerRef = useRef(null);

  useEffect(() => {
    messagesService.list()
      .then((messagesResponse) => {
        setMessages(messagesResponse);
      })
      .catch(console.error)
  }, [])



  const handleNewMessage = (createdMessage) => {
    setMessages((prev) => [createdMessage, ...prev])
    containerRef.current?.scrollTo(0, 0);
  }

  function handleDeleteMessage(id) {
    messagesService.deleteMessage(id)
      .then(() => setMessages((prev) => prev.filter((message) => message.id !== id)))
      .catch((error => console.error(error)))
  }

  function showDate() {
    return (format(new Date(), 'dd/MMM/yyyy'))
  }


  return (
    <div className="w-full h-full bg-darkGreen px-4 py-6 flex flex-col justify-between rounded-tl-[6rem]">
      <div>
        <h2 className="text-gray-200 text-center text-sizeSm3">{showDate()}</h2>
        <div ref={containerRef} className="flex flex-col overflow-y-scroll max-h-96 scrollbar-thin scrollbar-thumb-lightGreen mt-2">
          {messages.map((message, idx) => (
            <Message
              key={message.id}
              text={message.text}
              isEven={!(idx % 2)}
              owner={message.owner?.userAlias}
              image={message.owner?.image}
              time={message.createdAt}
              onMessageClick={() => handleDeleteMessage(message.id)} />
          ))}
        </div>
      </div>
      <MessageForm onNewMessage={handleNewMessage} />
    </div>
  )
}

export default SideChat