import React,{useState}from 'react'
import axios from 'axios'
import Papa from 'papaparse';
import { Button } from '@mui/material'

const Home = () => {
  const [array,setarray]=useState([])
  const onhandlesubmit=()=>{
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:5000/data',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4MzU5NjUzLCJpYXQiOjE2NzgzNTkzNTMsImp0aSI6IjY3OGJiY2U4OTk2ZDQ0ZGE5ZThiMGY1MDBjNTc2YzZlIiwidXNlcl9pZCI6Mn0.2qrWtQV4FwZgm-HhRRNi_6Yk8HQdCIONw_gMTa1pL-Q'
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response));
      const data=response.data;
      const parsedData = Papa.parse(data, { header: true }).data;
      setarray(parsedData)
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
        <Button variant="contained" onClick={onhandlesubmit}>Apply</Button>
        {/* <BacktestVersion3/>
        <FooterVersion2/> */}
        <div>
      {array.map((row) => (
        <div key={row.Email}>
          <p>Name: {row.Name}</p>
          <p>Age: {row.Age}</p>
          <p>Email: {row.Email}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Home