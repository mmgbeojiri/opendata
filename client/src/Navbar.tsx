import './App.css'

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
          <a href="#">Home</a>
          <a href="#">Info</a>
          <a href="#">Analysis</a>
        </div>

        <button id="menuButton" className="lg:hidden navbarbutton hover:!bg-blue-300 !px-5 text-2xl" onClick={toggleStuff}>☰</button>
        

        
      </div>
      <div id="panelContainer" className='ease-out duration-200 h-0 overflow-hidden'>
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
    </>
  )
}

export default Navbar
