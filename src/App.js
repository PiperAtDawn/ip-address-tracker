import React, { useState, useEffect } from 'react';
import MapElement from './components/MapElement.js'
import IPinfo from './components/IPinfo.js'
import IPForm from './components/IPForm.js'

function App() {

  require('dotenv').config();

  const[ipdata, setIpdata] = useState({
    "ip": "8.8.8.8",
    "location": {
      "region": "California",
      "city": "Mountain View",
      "lat": 37.40599,
      "lng": -122.078514,
      "timezone": "-07:00",
      },
      "isp": "Google LLC"
  });

  const[searchInput, setSearchInput] = useState("");

  const[errorMsg, setErrorMsg]=useState(false);

  const[searchMode, setSearchMode]=useState("");

  useEffect(() => {
    getIPs();
  }, []);

  const getIPs = async () => {
    if (searchInput === "") {
       setSearchMode("");
    }
    else {
      if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(searchInput))
      {
        setSearchMode("&ipAddress=")
      }
      else {
        setSearchMode("&domain=");
      }
    }
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}${searchMode}${searchInput}`);
    if (!response.ok) {
       setErrorMsg(true);
     }
     else { 
       const data = await response.json();
       setIpdata (data);
       setErrorMsg(false);
     }
  }

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>IP Address Tracker</h1>
          <em className="error-msg" style={{visibility: errorMsg ? "visible" : "hidden"}}>Incorrect input</em>
          <IPForm searchInput={searchInput} setSearchInput={setSearchInput} getIPs = {getIPs}/>
          <IPinfo IPdata = {ipdata} />
        </div>
      </header>
      <main>
        <MapElement IPdata = {ipdata} />
      </main>
    </div>
  );
}

export default App;