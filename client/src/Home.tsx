import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <p>The dataset used for this website is the 311 Service Requests from 2010 to Present.</p>
        <p>This set is provided by the <b>Social Services</b> Agency</p>
      </div>
    </>
  )
}

export default Home
