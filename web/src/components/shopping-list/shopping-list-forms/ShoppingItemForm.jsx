import { useState } from 'react'
import { useForm } from 'react-hook-form'
import shoppingListService from '@/services/shopping-list'
import { imageTypeMap } from '../../../utils/constants'

export default function ShoppingItemForm({ onNewProduct }) {
  const { register, handleSubmit, reset, setError, formState: { errors }, getValues } = useForm({ mode: 'onSubmit' })
  const [serverError, setServerError] = useState()
  const [typeImg, setTypeImg] = useState(imageTypeMap['Meat'])

  const onShoppingItemSubmit = (product) => {
    setServerError();
    shoppingListService.addProduct(product)
      .then((createdProduct) => {
        onNewProduct(createdProduct)
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

  const shoppingItemInputClassName = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkGreen peer"

  const shoppingItemLabelClassName = "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-darkborder-darkGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"

  return (
    <div className="flex justify-center">

      <div className="w-8/12 py-2 px-2">

        <form onSubmit={handleSubmit(onShoppingItemSubmit)}>
          {setServerError && <div className='text-red-600'>{serverError}</div>}

          <div className="grid md:grid-cols-2 md:gap-6">

            {/* NAME */}
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                name="name"
                id="name"
                className={shoppingItemInputClassName}
                placeholder=" "
                {...register('name', {
                  required: 'Product name is required',
                  minLength: {
                    value: 3,
                    message: 'Product name need at least 3 characters'
                  }
                })

                } />
              <label htmlFor="name" className={shoppingItemLabelClassName}>Product name</label>
            </div>

            {/* TYPE */}
            <div className="relative z-0 w-full mb-4 group">
              <select
                id="type"
                className="bg-primaryWhite border-2 border-darkGreen text-darkBlue text-sm rounded-lg focus:ring-lightRed focus:border-lighring-lightRed block w-full p-2.5"
                {...register('type', {
                  onChange: (event) => {
                    console.log(event, event.target, event.target?.value)
                    setTypeImg(imageTypeMap[event.target.value])
                  }

                })}
              >
                <option>Meat</option>
                <option>Fish</option>
                <option>Fruit</option>
                <option>Vegetables</option>
                <option>Any</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">

            {/* LOCATION */}
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                name="location"
                id="location"
                className={shoppingItemInputClassName}
                placeholder=" "
                {...register('location', {
                  required: 'The purchase establishment is required'
                })}
              />
              <label htmlFor="location" className={shoppingItemLabelClassName}>Supermarket</label>
            </div>

            {/* QUANTITY */}
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                name="quantity"
                id="quantity"
                className={shoppingItemInputClassName}
                placeholder=" "
                {...register('quantity')}
              />
              <label htmlFor="quantity" className={shoppingItemLabelClassName}>Quantity</label>
            </div>
          </div>

          <button type="submit" className="text-white bg-lightRed hover:bg-red-400 focus:outline-none focus:ring-red-20 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Add new product</button>
        </form>

      </div>

      <div className="w-4/12 flex justify-center pt-2">
        <div className="max-h-40 w-3/4 overflow-hidden rounded-xl">
          <img
            src={typeImg}
            alt="Product group image"
            className="object-cover h-40 w-80 hover:scale-125 transition-all ease-in-out duration-500"
          />
        </div>
      </div>

    </div>
  )
}