import React from 'react';
import { useState, useEffect } from "react";
//import "./style.css";
import axios, * as others from 'axios';

//const axios = require('axios');
const getData = async ()=>{
  // Make a request for a user with a given ID
  return(
    await axios.get('https://randomuser.me/api')
      .then(function (response) {
        // handle success
        console.log(response);
        return JSON.stringify(response,undefined, 2);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("Finally executed")
      })
  );
}
function FetchApiData() {
    const [jsonData, setJsonData] = useState('');
    useEffect(() => {
      getData().then(jsonData => {
        setJsonData(jsonData||'No JSON data found');
      })
    }, []); 
    return (
      <div className="FetchApiData">
        <pre id="json">
            {jsonData}
        </pre>
      </div>
    );
  }
  
  export default FetchApiData;