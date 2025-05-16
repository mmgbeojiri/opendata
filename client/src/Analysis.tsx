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

type ArrayEntry = [string, number]



function Analysis() {
  const [jsonData, setJsonData] = useState<DataEntry[]>([])
  const callApi = async () => {
    let url: string = "https://data.cityofnewyork.us/resource/erm2-nwe9.json"
    await axios.get(url)
      .then((response: any) => {
        setJsonData(response.data)
      })
  }



  useEffect(() => {
    callApi()
    console.log("API called")

   
  }, [])

  useEffect(() => {if (jsonData.length > 0) {
    tallyBoroughs();
  }}), [jsonData]



  const [boroughData, setBoroughData] = useState<ArrayEntry[]>([])

  function tallyBoroughs() {
      jsonData.forEach((entry: DataEntry) => {
        if (entry.borough) {
            console.log(entry.borough)
            let boroughEntry: ArrayEntry = [entry.borough, 0]
           
        }
    })

    console.log(boroughData)
  }

  return (
    <>
      <div className='m-5'>
        <h1>Analysis</h1>
      </div>
        {boroughData.toString()}
      
    </>
  )
}

export default Analysis
