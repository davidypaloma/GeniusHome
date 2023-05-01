import Message from "./Message"


const messages = [
  { id: 1, text: 'foo g gg ggf gf gf g gf gf ' },
  { id: 2, text: 'foo fshfdgj sfgnsfdx gfndghn dfghdfng sgfsfg sgsfgb sgfnfgn' },
  { id: 3, text: 'foo' },
  { id: 4, text: 'foo' }
]

function SideChat() {
  return (
    <div className="w-full h-full bg-darkGreen px-4 py-6 flex flex-col justify-between rounded-tl-[6rem]">
      <div>
        <h2 className="text-gray-200 mb-8 text-center">Today</h2>
        <div className="flex flex-col">
          {messages.map((message, idx) => (
            <Message key={message.id} text={message.text} isEven={!(idx % 2)} />
          ))}
        </div>
      </div>
      <form className="flex flex-col justify-between">
        <textarea
          placeholder="Something to say?"
          className="h-36 rounded-xl resize-none mb-4 px-4 py-4 text-primaryWhite bg-darkBlue border-2 border-primaryWhite"
        />
        <button type="submit" className="flex items-center justify-center bg-darkBlue text-primaryWhite border-2 border-primaryWhite rounded-xl py-2 px-4 w-full hover:bg-primaryWhite hover:text-darkBlue hover:font-bold">
          <span className="mr-2">Send</span>
        </button>
      </form>
    </div>
  )
}

export default SideChat