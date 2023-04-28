import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthStore'
import { NavLink } from 'react-router-dom'

function Header() {
  const { user } = useContext(AuthContext)
  return (
    <div className="flex justify-between">
      <div className="h-full w-1/4 ml-20 flex items-center">
        <h1 className="text-darkGreen font-bold text-sizeLg2">Home</h1>
      </div>
      <div className="h-full w-1/4 grid grid-cols-2 pl-10">
        <div className="text-darkGreen flex flex-col justify-center text-end">
          <NavLink to='/profile' className="font-semibold text-sizeMd2">Paloma Gladiné</NavLink> {/* {user.userName} */} {/*logout?*/}
          <h4 className="text-sizeMd1">Alias: vickie</h4> {/* {user.userAlias} */}
        </div>
        <div className="flex items-center px-6">
          <div className="bg-darkGreen h-20 w-20 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Header