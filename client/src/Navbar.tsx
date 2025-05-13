import './App.css'

function Navbar() {

  return (
    <>
      <div className="bg-blue-300 p-2 text-white items-center flex justify-around flex-row gap-[50%]">
        <h1 className='logo'>OpenData.com</h1>

        <div className="flex text-xl flex-row gap-5">
          <a href="#">Home</a>
          <a href="#">Info </a>
          <a href="#">Analysis</a>
          </div>
      </div>
    </>
  )
}

export default Navbar
