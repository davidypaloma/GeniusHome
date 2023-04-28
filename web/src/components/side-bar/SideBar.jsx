import { NavLink } from 'react-router-dom'
import geniusHomeLogo from "../../assets/geniusHomeLogo.png"
import geniusHomePic2 from "../../assets/geniusHomePic2.png"
import { AuthContext } from '../../contexts/AuthStore'

const renderSideBarClassName = ({ isActive }) => isActive ? 'bg-lightRed text-primaryWhite' : 'text-darkGreen font-bold w-2/3 mt-4 py-2 pl-4 rounded-lg hover:bg-lightRed hover:text-primaryWhite'


function SideBar() {
  const { user } = useContext(AuthContext)
  
  const handleLogout = () => {

  }

  return (
    <div className="w-96 h-screen flex flex-col border-r-2 border-darkGreen">
      <div className="w-full h-1/6 flex justify-center items-center">
        <img
          src={geniusHomeLogo}
          alt="Genius Home Logo"
          className="w-1/2"
        />
      </div>

      <nav className="w-full h-3/6 flex flex-col pl-24">
        <div className="flex flex-col">
          <span className="text-darkBlue font-bold hover:cursor-default">Organisation</span>
          <NavLink to="/#" className={renderSideBarClassName}>Shopping list</NavLink>
          <NavLink to="/#" className={renderSideBarClassName}>Cleaning tasks</NavLink>
          <span className="text-darkGreen font-bold w-2/3 mt-4 py-2 pl-4 text-opacity-25 hover:cursor-default">Calendar</span>
          <span className="text-darkGreen font-bold w-2/3 mt-4 py-2 pl-4 text-opacity-25 hover:cursor-default">Contacts</span>
        </div>

        <div className="flex flex-col">
          <span className="text-darkBlue font-bold pt-12 hover:cursor-default">Account management</span>
          <NavLink to="/#" className={renderSideBarClassName}>Profile</NavLink>
          <button onClick={handleLogout} className={renderSideBarClassName}>Log out</button>
        </div>
      </nav>

      <div className="w-full h-2/6">
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