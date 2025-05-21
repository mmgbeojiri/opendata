import { useEffect, useState, useRef } from 'react'
import c3 from 'c3';
import 'c3/c3.css';
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
  const [getData, setGetData] = useState<string>("Fetching...")
  const callApi = async () => {
    let url: string = "https://data.cityofnewyork.us/resource/erm2-nwe9.json"
    await axios.get(url)
      .then((response: any) => {
        setJsonData(response.data)
        setGetData("Retrieved")
      })
  }



  useEffect(() => {
    callApi()
    console.log("API called")


  }, [])

  useEffect(() => {
    console.log("jsonData changed")
    console.log(jsonData)
  }, [jsonData])

  useEffect(() => {
    if (jsonData.length > 0) {
      tallyBoroughs();
      tallyStatus();
      tallyComplaint();
    }
  },[jsonData])




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

  let complaintTally: ArrayEntry[] = [
    //["Street Condition", 0],
    //["Street Light Condition", 0],
    ["Blocked Driveway", 0],
    ["Illegal Parking", 0],
    ["Noise - Residential", 0],
    //["Dead/Dying Tree", 0],
    ["Noise - Street/Sidewalk", 0],
    //["Dirty Condition", 0],
    //["For Hire Vehicle Complaint", 0],
    //["Homeless Person Assistance", 0],
    //["Non-Emergency Police Matter", 0],
    //["Abandoned Bike", 0],
    //["Graffiti", 0],
    //["Drug Activity", 0],
    //["Rodent", 0],
    ["Noise - Commercial", 0],
    //["Noise - Vehicle", 0],
    //["Food Establishment", 0],
  ]

  const [complaintCount, setComplaintCount] = useState<ArrayEntry[]>(statusTally)
  function tallyComplaint() {
    let other: number = 0;
    jsonData.forEach((entry: DataEntry) => {
      if (entry.complaint_type) {
        for (let i = 0; i < complaintTally.length; i++) {
          if (entry.complaint_type == complaintTally[i][0]) {
            complaintTally[i][1] += 1;
            break;
          }
          if (i == complaintTally.length - 1) { 
            other += 1;
          }
        }
      } else {
        other += 1;
      }
    })
    let notFoundEntry: ArrayEntry = ["Other", other]
    complaintTally.push(notFoundEntry)
    setComplaintCount(complaintTally)
  }

  
const boroughChartRef = useRef<any>(null);
  useEffect(() => {
  const chart = c3.generate({
    bindto: boroughChartRef.current,
    data: {
      columns: boroughCount,
      type: 'pie',
    },
  });

  return () => {
    chart.destroy();
  }}, [boroughCount]);


  const statusChartRef = useRef<any>(null);
  useEffect(() => {
  const chart = c3.generate({
    bindto: statusChartRef.current,
    data: {
      columns: statusCount,
      type: 'pie',
    },
  });

  return () => {
    chart.destroy();
  }}, [statusCount]);

    const complaintChartRef = useRef<any>(null);
  useEffect(() => {
  const chart = c3.generate({
    bindto: complaintChartRef.current,
    data: {
      columns: complaintCount,
      type: 'pie',
    },
  });

  return () => {
    chart.destroy();
  }}, [complaintCount]);
  return (
    <>
      <div className='m-5'>
        <h1>Analysis</h1>
      </div>
      <div className='m-5'>
        <h2>Borough Visualization</h2>
        <div ref={boroughChartRef}></div>
      </div>
      <div className='m-5'>
        <h2>Status Visualization</h2>
        <div ref={statusChartRef}></div>
      </div>
      <div className='m-5'>
        <h2>Complaint Type Visualization</h2>
        <div ref={complaintChartRef}></div>
      </div>
      <div className='m-5 p-5 text-gray-500 bg-gray-50 rounded border border-gray-100'>
        <h3 className='text-xl font-bold'>Debug</h3>
        <p>Data Status: {getData}</p>
        <p>boroughCount: {boroughCount.toString()}</p>
        <p>statusCount: {statusCount.toString()}</p>
        <p>complaintCount: {complaintCount.toString()}</p>
      </div>


    </>
  )
}

export default Analysis
