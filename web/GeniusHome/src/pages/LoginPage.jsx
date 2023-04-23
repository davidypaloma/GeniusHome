import { useState } from "react"


function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleShowLogin = () => {
    setShowLogin(!showLogin)
  }

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="col-start-1 col-end-2 bg-primaryWhite">
        {showLogin ? (
          <>
            <h1 className="text-sizeMd2">Log in</h1>
            <p className="italic opacity-50">Aquí va el form de Log in</p>
            <button onClick={toggleShowLogin} className="border border-black rounded-lg px-2 py-1 my-2">Sign up</button>
          </>
        ) : (
          <>
            <h1 className="text-sizeMd2">Sign up</h1>
            <p className="italic opacity-50">Aquí va el form de Sign up</p>
            <button onClick={toggleShowLogin} className="border border-black rounded-lg px-2 py-1 my-2">Log In</button>
          </>
        )}
      </div>
      <div className="col-start-2 col-end-3">
        <img
          src="https://via.placeholder.com/1080x1080"
          alt="Imagen de fondo"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  )
}

export default LoginPage