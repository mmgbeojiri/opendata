import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

interface DataEntry {
  created_date: String
  agency_name: String
  complaint_type: String
  descriptor: String
  location_type: String
  incident_address: String
  city: String
  status: String
  borough: String
  latitude?: String
  longitude?: String

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
        <div key={index}>
          <h1>{entry.agency_name} - {entry.complaint_type}</h1>
        </div>
      ))}
    </div>
  </>
)
}

export default Info
