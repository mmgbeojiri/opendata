import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {

  return (
    <>
      <div className='m-5'>
        <h1>Home Page</h1>
        <h2>Table of Contents</h2>
        <div className='flex flex-col border border-gray-100 p-5 text-lg  text-gray-400  rounded'>
          <a href='#home'>Home</a>
        <a href='#info'>Info</a>
        <a href='#analysis'>Analysis</a>
        </div>
        <hr></hr>
        <h2 id="home">Home Page</h2>
        <p>Welcome to the OpenData website.</p>
        <p>The dataset used for this website is the 311 Service Requests from 2010 to Present.</p>
        <p>This set is provided by the <b>Social Services</b> Agency</p>
        <p>It contains information about the requests in New York City to 311.</p>
        <p>You can find this here: <a target="_blank" href='https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9/about_data'>OpenData Link</a></p>
        <hr></hr>
        <h2 id="info">Info Page</h2>
        <p>On the Info page, you can find information about the dataset.</p>
        <p>It contains information about the complaint, such as:</p>
        <ul>
          <li>Date & Time</li>
          <li>Complaint Type</li>
          <li>The Description</li>
          <li>Latitude & Longitude</li>
          <li>Street Location</li>
          <li>Agency Name</li>
          <li>Status of the Complaint</li>
        </ul>

        <p>The complaint has the name of the agency name plus the complaint type.</p>
        <p className='py-2'>For example, an entry can be: <span className='p-2 text-sm border border-gray-100 bg-gray-50 text-gray-400  rounded'>Department of Transportation - Street Condition</span>.</p>
        <p>You may search for any word inside the phrase for it to be indexed.</p>
        <p>All forms are not case sensitive.</p>
        <p>You can start off by search from this list, or going to the Analysis page.</p>
      
      <ul>
          <li>Graffiti</li>
          <li>Street Condition</li>
          <li>Noise</li>
          <li>Blocked Driveway</li>
          <li>Illegal Parking</li>
        </ul>
        <hr></hr>
      <h2 id="analysis">Analysis Page</h2>
      <p>On the analysis page, you can see a visualization of the entries as pie charts.</p>
      <p>It contains informination about the borough, status, and complaint type.</p>
      <p>It is very useful for finding which borough has the most requests, or the majority of requests if they are still open.</p>
      </div>
    </>
  )
}

export default Home
