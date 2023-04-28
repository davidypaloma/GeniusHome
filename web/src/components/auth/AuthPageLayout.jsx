import geniusHomeLogo from "../../assets/geniusHomeLogo.png"
import geniusHomePic1 from "../../assets/geniusHomePic1.png"

function AuthPageLayout({ children }) {
  return (
    <div className="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 h-screen">
      <div className="col-start-1 col-end-2 bg-primaryWhite h-screen">

        <div className="flex justify-center items-end h-1/5 pb-2">
          <img
            src={geniusHomeLogo}
            alt="Genius Home Logo"
            className="w-1/3"
          />
        </div>

        <div className="h-3/5 flex justify-center items-center pt-16">
          <div className="w-2/3 flex flex-col items-center">
            <p className="text-center text-sizeLg2 font-bold -mb-2 text-darkBlue">Welcome Back</p>
            <p className="text-center text-sizeMd3 font-extralight pb-4 opacity-50">Please, enter your credentials</p>
            {children}
          </div>
        </div>

        <div className="h-1/5 flex justify-center items-end pb-4">
          <p className="w-1/2 text-center text-sizeMd1 text-darkBlue opacity-50">Join the hundreds of families who already<br /> trust Genius Home to manage their home</p>
        </div>

      </div>

      <div className="col-start-2 col-end-3 h-screen">
        <img
          src={geniusHomePic1}
          alt="Home picture"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  )
}

export default AuthPageLayout
