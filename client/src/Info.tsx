import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

interface DataEntry {
  created_date: string
  agency_name: string
  complaint_type: string
  descriptor: string
  location_type: string
  incident_address: string
  city: string
  status: string
  borough: string
  latitude?: string
  longitude?: string

}





function Info() {
  const [jsonData, setJsonData] = useState<DataEntry[]>([])
  const [specificData, indexData] = useState<DataEntry[]>([])
  const callApi = async () => {
    let url: string = "https://data.cityofnewyork.us/resource/erm2-nwe9.json"
    await axios.get(url)
      .then((response: any) => {
        setJsonData(response.data)
        console.log(response.data)
      })
  }



  useEffect(() => {
    callApi()
    console.log("API called")
  }, [])

  const search = () => {
    indexData([])
    let element = document.getElementById("search") as HTMLInputElement
    let query: string;
    element ? query = element.value : query = ""

    jsonData.forEach((entry: DataEntry) => {
      let title_string = `${entry.agency_name} - ${entry.complaint_type}`
      if (title_string.toLowerCase().includes(query.toLowerCase())) {
        indexData((prev) => [...prev, entry]);
      }
    })

    console.log(specificData)
  }

  const copy = ((str: string) => {
    navigator.clipboard.writeText(str)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch((err) => {
        console.error('Error copying text: ', err);
      });
  })

  return (
    <>
      <div className='m-5'>
        <h1>Information</h1>
      </div>

      <div className="mx-auto max-w-xl flex flex-row ">
        <input type="text" className="inline !border-r-0 !rounded-r-none " placeholder="Search Complaint" id="search" />
        <button onClick={search} className="flex items-center space-x-1 rounded-md rounded-l-none border border-l-0 border-gray-300 px-2.5 text-gray-700 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-5 h-5" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
          </svg>
        </button>

      </div>

      <hr className='border-gray-300 m-5'></hr>

      <div id="output">
        {specificData.map((entry: DataEntry, index: number) => (
          <div className='card' key={index}>

            <h1>{entry.agency_name} - {entry.complaint_type}</h1>

            <h2>{
              new Date(entry.created_date).toLocaleDateString().toString() + " " + new Date(entry.created_date).toLocaleTimeString()
            }</h2>

            <div className='p-5 border border-gray-300 rounded my-2'>
              <p>Description: {entry.descriptor}</p>
              {entry.location_type ? <p>Location Type: {entry.location_type}</p> : <></> }
              <p>{entry.incident_address}</p>
              <p>{entry.borough} - {entry.city}</p>
            </div>

            <p className={
              entry.status === "Closed" ? "redText" :
              entry.status === "Open" ? "greenText" :
              entry.status === "In Progress" ? "yellowText" : ""
            }>Status: {entry.status}</p>

            {entry.latitude && entry.longitude ? 
              <div className='latlon'>
                <span>Location: ({entry.latitude}, {entry.longitude})</span>

                <button className='copybutton' onClick={() => {
                  copy(`(${entry.latitude}, ${entry.longitude})`)
                }}>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                  </svg>

                  <span>Copy</span>
                  </button>
              </div>
              : <></>
            }

          </div>
        ))}
      </div>
    </>
  )
}

export default Info
