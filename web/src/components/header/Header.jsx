import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '@/contexts/AuthStore'
import { imageAvatar } from '@/utils/constants'
import homeService from '@/services/home';

function Header({ title }) {
  const { user } = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false);
  const [homeUsers, setHomeUsers] = useState([])

  const handleAvatarClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    homeService.detail()
      .then((homeResult) => {
        setHomeUsers(homeResult.users)
      })
  }, [])

  return (
    <div className="flex justify-between">

      <div className="h-full w-2/4 ml-20 flex items-center">
        <h1 className="text-darkGreen font-bold text-sizeLg2">{title}</h1>
      </div>

      <div className="h-full w-1/4 flex justify-center">
        <div className="text-darkGreen flex flex-col justify-center text-end">
          <p className="font-semibold text-sizeMd2">{user?.userName}</p>
          <h4 className="text-sizeMd1">Alias: {user?.userAlias}</h4>
        </div>
        <div className="flex items-center px-6">
          <div
            className="bg-darkGreen h-16 w-16 rounded-full cursor-pointer"
            onClick={handleAvatarClick}
          >
            <img src={imageAvatar[user?.image]} alt={user?.image} />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-opacity-50 bg-black backdrop-filter backdrop-blur-sm z-10 flex justify-center items-center">
          <div className="w-1/3 aspect-video bg-primaryWhite rounded-3xl px-12 py-6 hover:scale-110 ease-in-out duration-500">

            <button
              className="flex justify-end hover:animate-spin ml-[95%]"
              onClick={() => setShowModal(false)}
            >
              ❌
            </button>

            <section className="flex">
              <div className="w-1/5 h-24 flex justify-center">
                <div className="h-full aspect-square rounded-full">
                  <img
                    src={imageAvatar[user?.image]}
                    alt={user?.image}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-4/5 h-20 text-end text-darkGreen flex flex-col justify-center pt-4">
                <h1 className='text-sizeLg1 font-bold'>{user?.userName}</h1>
                <h3 className='text-sizeMd2 font-extralight'>Alias: {user?.userAlias}</h3>
              </div>
            </section>

            <section className='w-full h-12 flex justify-center'>
              {homeUsers.map((user) => (
                <img key={user.id} src={imageAvatar[user.image]} alt={user.image} className="bg-darkBlue border-2 border-primaryWhite h-12 aspect-square rounded-full -ml-2" />
              ))}
            </section>

            <div className='w-full flex justify-center mt-6'>
              <div className='w-11/12 h-10 bg-lightRed rounded-lg text-center flex items-center justify-center'>
                <p className='text-primaryWhite italic font-thin'>FamilyID: {user?.home}</p>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Header
