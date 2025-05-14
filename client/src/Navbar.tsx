import './App.css'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  const toggleStuff = (e: React.MouseEvent<HTMLButtonElement>) => {


    /* Toggle between hiding and showing the active panel */
    let container = document.getElementById("panelContainer");
    if (container) {
    if (container.style.height !== "0px") {
      container.style.height = "0px";
    } else {
      container.style.height = container.scrollHeight + "px";
    }
  }

  }

  return (
    <>
      <div id="navbar" className="bg-blue-300 p-2 text-white items-center flex justify-between flex-row">
        <h1 className='navbarbutton'>OpenData.com</h1>

        <div className="hidden lg:flex text-xl flex-row gap-5">
          <Link to="/">Home</Link>
          <Link to="/info">Info</Link>
          <Link to="/analysis">Analysis</Link>
        </div>

        <button id="menuButton" className="navbarbutton lg:hidden hover:!bg-blue-300 !px-5 text-2xl" onClick={toggleStuff}>☰</button>
        

        
      </div>
      <div id="panelContainer" style={{height: "0px"}} className='ease duration-500 h-0 overflow-hidden'>
      <div className='panel'>
        <p>Home</p>
      </div>
      <div className='panel'>
        <p>Info</p>
      </div>
       <div className='panel'>
        <p>Analysis</p>
      </div>
      </div>

      <Outlet />
    </>
  )
}

export default Navbar
