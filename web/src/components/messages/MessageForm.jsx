import { useState } from 'react'
import { useForm } from 'react-hook-form'
import messagesService from '@/services/messages'

function MessageForm({ onNewMessage }) {
  const { register, handleSubmit, reset, setError, formState: { errors } } = useForm({ mode: 'onSubmit' })

  const [serverError, setServerError] = useState()

  const onMessageSubmit = (message) => {
    setServerError();
    messagesService.create(message)
      .then((createdMessage) => {
        onNewMessage(createdMessage)
        reset()
      })
      .catch(error => {
        const errors = error.response?.data?.errors;
        if (errors) {
          Object.keys(errors)
            .forEach((inputName) => setError(inputName, {
              message: errors[inputName]
            }))
        } else {
          setServerError(error.message)
        }
      })
  }

  return (
    <form onSubmit={handleSubmit(onMessageSubmit)} className="flex flex-col justify-between">
      {setServerError && <div className='text-red-600'>{serverError}</div>}
      <textarea
        placeholder="Something to say?"
        className="h-36 rounded-xl resize-none mb-4 px-4 py-4 text-primaryWhite bg-darkBlue border-2 border-primaryWhite"
        maxLength={80}
        {...register('text', {
          required: 'Message text is required'
        })}
      />
      {errors.text && <div className='text-red-600'>{errors.text?.message}</div>}
      <button type="submit" className="flex items-center justify-center bg-darkBlue text-primaryWhite border-2 border-primaryWhite rounded-xl py-2 px-4 w-full hover:bg-primaryWhite hover:text-darkBlue hover:font-bold">
        <span className="mr-2">Send</span>
      </button>
    </form>
  )
}
export default MessageForm