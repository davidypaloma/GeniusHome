import { useState } from 'react';
import { useForm } from 'react-hook-form'
import userService from '../../../services/users'

function SignupForm() {
  const { register, handleSubmit, reset, setError, formState: { errors } } = useForm({ mode: 'onBlur' })
  const [serverError, setServerError] = useState();

  const onSignupSubmit = (user) => {
    setServerError();
    userService.create(user)
      .then(user => {
        console.info(user)
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

  const signUpInputClass = "bg-mediumGreen appearance-none rounded-lg w-3/5 h-14 py-2 px-6 text-gray-700 leading-tight focus:outline-none placeholder-primaryWhite placeholder:opacity-80"

  // TODO: completar validaciones ¿valores por defecto?: p.ej para editar y que tenga los valores anteriores. ¿delay error?: por si hay petición al backend y que no se note cuando el error es en el cliente y cuando viene del back. ¿Joi? 

  // se pueden ver los mensajes de required directamente dentro del input?

  return (
    <form onSubmit={handleSubmit(onSignupSubmit)} className="w-full -mb-10">

      {setServerError && <div className='text-red-600'>{serverError}</div>}

      {/* NAME */}
      <div className="w-full mt-10 flex flex-col items-center">
        <input
          className={`${signUpInputClass} ${errors.userName ? 'placeholder-red-600' : ''}`}
          id="userName"
          type="text"
          placeholder="Your name"
          autoComplete="off"
          {...register('userName', {
            required: 'user name is required'
          })} />
        {errors.userName && <div className='text-red-600'>{errors.userName?.message}</div>}
      </div>

      {/* ALIAS */}
      <div className="w-full mt-2 flex flex-col items-center">
        <input
          className={`${signUpInputClass} ${errors.userAlias ? 'placeholder-red-600' : ''}`}
          id="userAlias"
          type="text"
          placeholder="Write an alias"
          {...register('userAlias', {
            required: 'you need an alias to be part of this family'
          })} />
        {errors.userAlias && <div className='text-red-600'>{errors.userAlias?.message}</div>}
      </div>

      {/* MAIL */}
      <div className="w-full mt-2 flex flex-col items-center">
        <input
          className={`${signUpInputClass} ${errors.email ? 'placeholder-red-600' : ''}`}
          id="email"
          type="email"
          placeholder="example@mail.com"
          {...register('email', {
            required: 'email is required'
          })} />
        {errors.email && <div className='text-red-600'>{errors.email?.message}</div>}
      </div>

      {/* PASSWORD */}
      <div className="w-full mt-2 flex flex-col items-center">
        <input
          className={`${signUpInputClass} ${errors.password ? 'placeholder-red-600' : ''}`}
          id="password"
          type="password"
          placeholder="min 8 characters"
          {...register('password', {
            required: 'password is required'
          })} />
        {errors.password && <div className='text-red-600'>{errors.password?.message}</div>}
      </div>

      <div className="w-full mt-2 flex flex-col items-center gap-1">

        {/* NEWHOME */}
        <input
          className={`${signUpInputClass} ${errors.homeName ? 'placeholder-red-600' : ''}`}
          id="homeName"
          type="text"
          placeholder="New Home"
          {...register('homeName')} />
        {errors.homeName && <div className='text-red-600'>{errors.homeName?.message}</div>}

        {/* HOMEID */}
        <input
          className={`${signUpInputClass} ${errors.homeId ? 'placeholder-red-600' : ''}`}
          id="homeId"
          type="text"
          placeholder="HomeID"
          {...register('homeId')} />
        {errors.homeId && <div className='text-red-600'>{errors.homeId?.message}</div>}
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