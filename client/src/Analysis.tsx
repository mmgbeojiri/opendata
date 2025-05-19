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
    tallyStatus();
  }}), [jsonData]




  let boroughsTally: ArrayEntry[] = [
    ["MANHATTAN", 0],
    ["BRONX", 0],
    ["BROOKLYN", 0],
    ["QUEENS", 0],
    ["STATEN ISLAND", 0]
  ]

  const [boroughCount, setBoroughCount] = useState<ArrayEntry[]>(boroughsTally)

  function tallyBoroughs() {
    //let notFound: number = 0;
      jsonData.forEach((entry: DataEntry) => {
        if (entry.borough) {
            console.log(entry.borough)
            for (let i = 0; i < boroughsTally.length; i++) {
                // loop until we find the borough
                // if the borough is found, increment the count
                if (entry.borough == boroughsTally[i][0]) {
                    boroughsTally[i][1] += 1;
                    
                }
                
            }
           
        } /*else {
          notFound += 1;
        }*/
    })

    /*let notFoundEntry: ArrayEntry = ["Unknown", notFound]
    boroughsTally.push(notFoundEntry)*/
    setBoroughCount(boroughsTally)

    console.log(boroughCount)
  }

  let statusTally: ArrayEntry[] = [
    ["Open", 0],
    ["In Progress", 0],
    ["Closed", 0],
  ]

  const [statusCount, setStatusCount] = useState<ArrayEntry[]>(statusTally)
  function tallyStatus() {
    //let notFound: number = 0;
      jsonData.forEach((entry: DataEntry) => {
        if (entry.status) {
            for (let i = 0; i < statusTally.length; i++) {
                if (entry.status == statusTally[i][0]) {
                    statusTally[i][1] += 1;                  
                }             
            }     
        } /*else {
          notFound += 1;
        }*/
    })
    /*let notFoundEntry: ArrayEntry = ["Unknown", notFound]
    statusTally.push(notFoundEntry)*/
    setStatusCount(statusTally)
  }

  return (
    <>
      <div className='m-5'>
        <h1>Analysis</h1>
      </div>
        {boroughCount.toString()}
        {statusCount.toString()}
      
    </>
  )
}

export default Analysis
