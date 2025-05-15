import './App.css'
import { NavLink , Outlet } from 'react-router-dom'

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
          <NavLink className="panellink" to="/">Home</NavLink >
          <NavLink className="panellink" to="/info">Info</NavLink >
          <NavLink className="panellink" to="/analysis">Analysis</NavLink >
        </div>

        <button id="menuButton" className="lg:hidden navbarbutton hover:!bg-blue-300 !px-5 text-2xl" onClick={toggleStuff}>☰</button>
        

        
      </div>
      <div id="panelContainer" style={{height: "0px"}} className='ease duration-500 h-0 overflow-hidden'>
      <NavLink to="/" className='panel'>
          <span className="panellink">Home</span >
      </NavLink>
      <NavLink to="/info" className='panel'>
          <span  className="panellink" >Info</span >
      </NavLink>
       <NavLink  to="/analysis" className='panel'>
          <span  className="panellink" >Analysis</span >
      </NavLink>
      </div>

      <Outlet />
    </>
  )
}

export default Navbar
