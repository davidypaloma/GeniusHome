import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form'
import userService from '@/services/users'
import { AuthContext } from '@/contexts/AuthStore';
import { useNavigate } from 'react-router-dom';

function LoginForm({ defaultEmail }) {
  const { register, handleSubmit, reset, setError, formState: { errors } } = useForm({ mode: 'onBlur' })
  const [serverError, setServerError] = useState();
  const { onUserChange } = useContext(AuthContext)
  const navigate = useNavigate();

  const onLoginSubmit = (user) => {
    setServerError();
    userService.login(user)
      .then((user) => {
        onUserChange(user)
        reset()
        navigate('/home')
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

  const logInInputClass = "bg-mediumGreen appearance-none rounded-lg w-3/5 h-14 py-2 px-6 text-gray-700 leading-tight focus:outline-none placeholder-primaryWhite placeholder:opacity-80"

  // TODO: completar validaciones ¿valores por defecto?: p.ej para editar y que tenga los valores anteriores. ¿delay error?: por si hay petición al backend y que no se note cuando el error es en el cliente y cuando viene del back. ¿Joi?

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)} className="w-full">

      {setServerError && <div className='text-red-600'>{serverError}</div>}

      {/* MAIL */}
      <div className="w-full mt-10 flex flex-col items-center">
        <input
          className={`${logInInputClass}`}
          id="email"
          type="email"
          placeholder="example@mail.com"
          autoComplete="off"
          defaultValue={defaultEmail}
          {...register('email', {
            required: 'Enter your email',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'The format of the email entered is not correct'
            }
          })} />
        {errors.email && <div className='text-red-600 text-center text-sizeSm3 w-full'>{errors.email?.message}</div>}
      </div>

      {/* PASSWORD */}
      <div className="w-full mt-4 flex flex-col items-center">
        <input
          className={`${logInInputClass}`}
          id="password"
          type="password"
          placeholder="******************"
          {...register('password', {
            required: 'Enter your password'
          })} />
        {errors.password && <div className='text-red-600 text-center text-sizeSm3 w-full'>{errors.password?.message}</div>}
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
export default LoginForm