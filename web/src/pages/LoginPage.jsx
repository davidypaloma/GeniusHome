import { useState } from "react"


function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  const handleShowLogin = () => {
    setShowLogin(true)
  }

  const handleShowSignUp = () => {
    setShowLogin(false)
  }

  const logInInputClass = "bg-mediumGreen appearance-none rounded-lg w-3/5 h-14 py-2 px-6 text-gray-700 leading-tight focus:outline-none placeholder-primaryWhite placeholder:opacity-80"

  const signUpInputClass = "bg-mediumGreen appearance-none rounded-lg w-3/5 h-14 py-2 px-6 text-gray-700 leading-tight focus:outline-none placeholder-primaryWhite placeholder:opacity-80"

  return (
    <div className="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 h-screen">
      <div className="col-start-1 col-end-2 bg-primaryWhite h-screen">

        <div className="flex justify-center items-end h-1/5 pb-2">
          <img
            src="../../public/assets/geniusHomeLogo.png"
            alt="Genius Home Logo"
            className="w-1/3"
          />
        </div>

        <div className="h-3/5 flex justify-center items-center pt-16">
          <div className="w-2/3 flex flex-col items-center">
            <p className="text-center text-sizeLg2 font-bold -mb-2 text-darkBlue">Welcome Back</p>
            <p className="text-center text-sizeMd3 font-extralight pb-4 opacity-50">Please, enter your credentials</p>

            <div className="bg-mediumGreen h-14 flex justify-around rounded-lg p-1 w-3/5">
              <button className={`w-1/2 rounded-lg text-darkGreen ${showLogin ? 'bg-primaryWhite font-semibold' : 'text-opacity-50'}`} onClick={handleShowLogin}>Log in</button>

              <button className={`w-1/2 rounded-lg text-darkGreen ${!showLogin ? 'bg-primaryWhite font-semibold' : 'text-opacity-50'}`} onClick={handleShowSignUp}>Sign up</button>
            </div>

            <div className="w-full">

              {showLogin ? (

                <form className="w-full">
                  <div className="w-full mt-10 flex justify-center">

                    {/* MAIL */}
                    <input className={`${logInInputClass}`} id="mail" type="mail" placeholder="example@mail.com" autoComplete="off" />
                  </div>

                  <div className="w-full mt-4 flex justify-center">

                    {/* PASSWORD */}
                    <input className={`${logInInputClass}`} id="password" type="password" placeholder="******************" />

                  </div>
                  <div className="w-full flex justify-center mt-4">
                    <button className="bg-lightRed rounded-lg text-primaryWhite w-1/5 h-14">Continue</button>
                  </div>

                </form>

              ) : (

                <form className="w-full -mb-10">

                  {/* NAME */}
                  <div className="w-full mt-10 flex justify-center">
                    <input className={`${signUpInputClass}`} id="text" type="text" placeholder="Your name" autoComplete="off" />
                  </div>

                  {/* ALIAS */}
                  <div className="w-full mt-2 flex justify-center">
                    <input className={`${signUpInputClass}`} id="text" type="text" placeholder="Write an alias" />
                  </div>

                  {/* MAIL */}
                  <div className="w-full mt-2 flex justify-center">
                    <input className={`${signUpInputClass}`} id="mail" type="mail" placeholder="example@mail.com" />
                  </div>

                  {/* PASSWORD */}
                  <div className="w-full mt-2 flex justify-center">
                    <input className={`${signUpInputClass}`} id="password" type="password" placeholder="******************" />
                  </div>


                  <div className="w-full mt-2 flex justify-center gap-1">

                    {/* NEWHOME */}
                    <input className="bg-mediumGreen appearance-none rounded-lg w-1/5 h-14 py-2 px-2 text-center text-gray-700 leading-tight focus:outline-none placeholder-primaryWhite placeholder:opacity-80" id="text" type="text" placeholder="New Home" />

                    {/* HOMEID */}
                    <input className="bg-mediumGreen appearance-none rounded-lg w-2/5 h-14 py-2 px-6 text-gray-700 leading-tight focus:outline-none placeholder-primaryWhite placeholder:opacity-80" id="text" type="text" placeholder="HomeID" />


                  </div>

                  <div className="w-full flex justify-center mt-4">
                    <button className="bg-lightRed rounded-lg text-primaryWhite w-1/5 h-14">Continue</button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

        <div className="h-1/5 flex justify-center items-end pb-4">
          <p className="w-1/2 text-center text-sizeMd1 text-darkBlue opacity-50">Join the hundreds of families who already<br />trust Genious House to manage their home</p>
        </div>

      </div>
      <div className="col-start-2 col-end-3 h-screen">
        <img
          src="../../public/assets/geniusHomePic1.png"
          alt="Home picture"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  )
}

export default LoginPage