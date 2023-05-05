import { NavLink } from 'react-router-dom'
import geniusHomeLogo from "@/assets/geniusHomeLogo.png"
import geniusHomePic2 from "@/assets/geniusHomePic2.png"
import { AuthContext } from '@/contexts/AuthStore'
import userService from '@/services/users'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import homeService from '@/services/home'
import { imageAvatar } from '@/utils/constants'

const sideBarClassName = 'text-darkGreen font-bold w-2/3 mt-4 py-1 pl-4 rounded-lg hover:bg-lightRed hover:text-primaryWhite'

// const renderSideBarClassName = ({ isActive }) => isActive ? sideBarClassName : `${sideBarClassName} text-opacity-40`


function SideBar() {
  const { user, onUserChange } = useContext(AuthContext)
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false)
  const [homeUsers, setHomeUsers] = useState([])

  useEffect(() => {
    homeService.detail()
      .then((homeResult) => {
        setHomeUsers(homeResult.users)
      })
  }, [])

  const handleProfileClick = () => {
    setShowModal(true)
  }

  const handleLogout = () => {
    userService.logout()
      .then(() => {
        onUserChange()
        navigate('/login')
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="w-96 h-screen flex flex-col border-r-2 border-darkGreen">
      <NavLink to="/home" className="w-full h-1/6 flex justify-center items-center">
        <img
          src={geniusHomeLogo}
          alt="Genius Home Logo"
          className="w-1/2"
        />
      </NavLink>

      <nav className="w-full h-4/6 flex flex-col justify-center pl-24">
        <div className="flex flex-col">
          <span className="text-darkBlue font-bold hover:cursor-default">Organization</span>
          <NavLink to="/shopping-list" className={sideBarClassName}>Shopping list</NavLink>
          <NavLink to="/task-list" className={sideBarClassName}>Tasks list</NavLink>
          <div className='w-2/3 mt-4 py-1 pl-4 hover:cursor-default flex'>
            <p className="text-slate-500 text-opacity-25 font-bold">Calendar</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6675/6675275.png"
              alt="coming soon icon"
              className='h-5 aspect-square opacity-30 mx-4'
            />
          </div>
          <div className='w-2/3 mt-4 py-1 pl-4 hover:cursor-default flex'>
            <p className="text-slate-500 text-opacity-25 font-bold">Contacts</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6675/6675275.png"
              alt="coming soon icon"
              className='h-5 aspect-square opacity-30 mx-4'
            />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-darkBlue font-bold pt-6 hover:cursor-default">Account management</span>
          <p
            className={sideBarClassName}
            onClick={handleProfileClick}
          >
            Profile
          </p>
          <button onClick={handleLogout} className={`text-left ${sideBarClassName}`}>Log out</button>
        </div>
      </nav>

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


      <div className="w-full h-[30%]">
        <img
          src={geniusHomePic2}
          alt="Home picture"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default SideBar