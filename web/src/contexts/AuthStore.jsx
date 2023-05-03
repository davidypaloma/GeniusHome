import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthStore({ children }) {
  const [user, setUser] = useState();

  const handleUserChange = (user) => {
    setUser(user);
    if (user) {
      localStorage.setItem('user-data', JSON.stringify(user))
    } else {
      localStorage.removeItem('user-data')
    }
  }

  useEffect(() => {
    const currentUser = localStorage.getItem('user-data')
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    }
  }, [])


  return (
    <AuthContext.Provider value={{ user, onUserChange: handleUserChange }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthStore as default, AuthContext }