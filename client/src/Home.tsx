import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {

  return (
    <>
      <div className='m-5'>
        <h1>Home Page</h1>
        <p>The dataset used for this website is the 311 Service Requests from 2010 to Present.</p>
        <p>This set is provided by the <b>Social Services</b> Agency</p>
        <p>It contains information about the requests in New York City to 311.</p>
        <p>You can find this here: <a target="_blank" href='https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9/about_data'>OpenData Link</a></p>
        <h2>Info Page</h2>
        <p>On the Info page, you can find information about the dataset.</p>
        <p>It contains information about the complaint, such as:</p>
        <ul>
          <li>Date & Time</li>
          <li>The Description</li>
          <li>Latitude & Longitude</li>
          <li>Street Location</li>
          <li>Agency Name</li>
          <li>Status of the Complaint</li>
        </ul>
      </div>
    </>
  )
}

export default Home
