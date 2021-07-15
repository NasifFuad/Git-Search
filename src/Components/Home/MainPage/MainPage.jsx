import React, { useState, useEffect } from 'react';
import axios from "axios"
import InputSection from './../InputSection/InputSection.jsx';
const MainPage = () => {
  const [input, setInput] = useState();
  const [submit, setSubmit] = useState();
  const [api,setAPI] = useState([])
  const handleInputValue = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSubmit(input);
  };
  const apiData = (data) =>{
    setAPI(data)
  }
  const githubAPI = `https://api.github.com/users`
  useEffect(() =>{
    fetch(`${githubAPI}/${submit}`)
    .then(response => response.json)
    .then(result => {
      setAPI(result.data)
    })
  },[setAPI])
  console.log(api)
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="title">GitSearch</h1>
        <div class="input-field">
          <input
            type="text"
            className="input"
            placeholder="Search By Github User Name"
            onChange={handleInputValue}
          />

          <button>Search</button>
        </div>
      </form>
      
    </>
  );
};

export default MainPage;
