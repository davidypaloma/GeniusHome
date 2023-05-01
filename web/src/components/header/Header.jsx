import React, { useContext, useEffect } from 'react'
import { AuthContext } from '@/contexts/AuthStore'
import { NavLink } from 'react-router-dom'

function Header({ title }) {
  const { user } = useContext(AuthContext)

  return (
    <div className="flex justify-between">
      <div className="h-full w-2/4 ml-20 flex items-center">
        <h1 className="text-darkGreen font-bold text-sizeLg2">{title}</h1>
      </div>
      <div className="h-full w-1/4 flex justify-center">
        <div className="text-darkGreen flex flex-col justify-center text-end">
          <NavLink to='/profile' className="font-semibold text-sizeMd2">{user?.userName}</NavLink>
          <h4 className="text-sizeMd1">Alias: {user?.userAlias}</h4>
        </div>
        <div className="flex items-center px-6">
          <div className="bg-darkGreen h-16 w-16 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Header