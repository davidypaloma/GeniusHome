import { useState } from 'react';
import { useForm } from 'react-hook-form'
import userService from '@/services/users'

function SignupForm({ onSignupSuccess }) {
  const { register, handleSubmit, reset, setError, formState: { errors } } = useForm({ mode: 'onBlur' })
  const [serverError, setServerError] = useState();

  const [isHomeIdDisabled, setHomeIdDisabled] = useState(false)
  const [isHomeNameDisabled, setHomeNameDisabled] = useState(false)

  const onSignupSubmit = (user) => {
    setServerError();
    userService.create(user)
      .then((createdUser) => {
        onSignupSuccess(createdUser.email)
        reset()
      })
      .catch(error => {
        const errors = error.response?.data?.errors;
        if (errors) {
          Object.keys(errors)
            .forEach((inputName) => setError(inputName, { message: errors[inputName] }))
        } else {
          // Iría aquí el navigate a página de error???
          setServerError(error.message)
        }
      })
  }

  const signUpInputClass = "bg-mediumGreen appearance-none rounded-lg h-14 py-2 px-6 text-gray-700 leading-tight focus:outline-none placeholder-primaryWhite placeholder:opacity-80"

  // TODO: completar validaciones ¿valores por defecto?: p.ej para editar y que tenga los valores anteriores. ¿delay error?: por si hay petición al backend y que no se note cuando el error es en el cliente y cuando viene del back. ¿Joi? 

  // se pueden ver los mensajes de required directamente dentro del input?

  return (
    <form onSubmit={handleSubmit(onSignupSubmit)} className="w-full -mb-10">

      {setServerError && <div className='text-red-600'>{serverError}</div>}

      <div className="flex justify-center mt-2">
        {/* NAME */}
        <div className="w-full mt-2 flex flex-col items-center">
          <input
            className={`${signUpInputClass}`}
            id="userName"
            type="text"
            placeholder="Your name"
            autoComplete="off"
            {...register('userName', {
              required: 'User name is required'
            })} />
          {errors.userName && <div className='text-red-600 text-center text-sizeSm3 w-full'>{errors.userName?.message}</div>}
        </div>
        {/* ALIAS */}
        <div className="w-full mt-2 flex flex-col items-center">
          <input
            className={`${signUpInputClass}`}
            id="userAlias"
            type="text"
            placeholder="Write an alias"
            {...register('userAlias', {
              required: 'Alias is required'
            })} />
          {errors.userAlias && <div className='text-red-600 text-center text-sizeSm3 w-full'>{errors.userAlias?.message}</div>}
        </div>
      </div>

      <div className="flex justify-center mt-2">
        {/* MAIL */}
        <div className="w-full flex flex-col items-center">
          <input
            className={`${signUpInputClass}`}
            id="email"
            type="email"
            placeholder="example@mail.com"
            {...register('email', {
              required: 'Email is required'
            })} />
          {errors.email && <div className='text-red-600 text-center text-sizeSm3 w-full'>{errors.email?.message}</div>}
        </div>
        {/* PASSWORD */}
        <div className="w-full flex flex-col items-center">
          <input
            className={`${signUpInputClass}`}
            id="password"
            type="password"
            placeholder="min 8 characters"
            {...register('password', {
              required: 'Password is required'
            })} />
          {errors.password && <div className='text-red-600 text-center text-sizeSm3 w-full'>{errors.password?.message}</div>}
        </div>
      </div>

      <div className="flex justify-center mt-2">
        {/* NEWHOME */}
        <div className="w-full flex flex-col items-center">
          <input
            className={`${signUpInputClass} ${isHomeNameDisabled ? 'bg-opacity-50' : ''} ${errors.homeName ? 'placeholder-red-600' : ''}`}
            id="homeName"
            type="text"
            disabled={isHomeNameDisabled}
            placeholder="New Home"
            {...register('homeName', {
              onChange(e) {
                setHomeIdDisabled(!!e.target.value)
              }
            })} />
          {errors.homeName && <div className='text-red-600 text-center text-sizeSm3 w-full'>{errors.homeName?.message}</div>}
        </div>

        {/* HOMEID */}
        <div className="w-full flex flex-col items-center">
          <input
            className={`${signUpInputClass} ${isHomeIdDisabled ? 'bg-opacity-50' : ''} ${errors.homeId ? 'placeholder-red-600' : ''}`}
            id="homeId"
            type="text"
            disabled={isHomeIdDisabled}
            placeholder="HomeID"
            {...register('homeId', {
              onChange(e) {
                setHomeNameDisabled(!!e.target.value)
              }
            })} />
          {errors.homeId && <div className='text-red-600 text-center text-sizeSm3 w-full'>{errors.homeId?.message}</div>}
        </div>
      </div>

      <div className="w-full flex justify-center mt-4">
        <button
          type='submit'
          className="bg-lightRed rounded-lg text-primaryWhite w-1/5 h-14"
        >Continue
        </button>
      </div>

    </form>
  )
}
export default SignupForm