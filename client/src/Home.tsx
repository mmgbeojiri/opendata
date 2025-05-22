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
        <div className='flex flex-col xl:!flex-row xl:gap-4 items-center'>
        <div className='flex-1 w-full'><p>On the Info page, you can find information about the dataset.</p>
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
        <hr className='xl:hidden flex'></hr>
</div><div className='card !m-0' >

            <h1>Agency Name - Complaint Type</h1>

            <h2>
              Jan 19th, 2038 3:14:07 AM
            </h2>

            <div className='p-5 border border-gray-300 rounded my-2'>
              <p>Description</p>
              <p>Location Type</p> 
              <p>Incident Address</p>
              <p>Borough - City</p>
            </div>

            <p className="greenText"        
            >Status: Open</p>


              <div className='latlon'>
                <span>Location: (0, 0)</span>

                <button className='copybutton' onClick={() => {
                  alert("Just because it's a example doesn't mean you get to copy it!")
                }}>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                  </svg>

                  <span>Copy</span>
                  </button>
              </div>


          </div>
          </div>
                  <hr></hr>

      <h2 id="analysis">Analysis Page</h2>
      <div className='flex flex-col xl:!flex-row xl:gap-4 items-center'>
      <div className='flex-1 w-full'>
      <p>On the analysis page, you can see a visualization of the entries as pie charts.</p>
      <p>It contains informination about the borough, status, and complaint type.</p>
      <p>It is very useful for finding which borough has the most requests, or the majority of requests if they are still open.</p>
              <hr className='xl:hidden flex'></hr>

      </div>
      <div>
        <p>HEY</p>
      </div>
      </div>
      </div>
    </>
  )
}

export default Home
