import React, { useState } from 'react';
import './App.css';
import Login from './login.js';

function App() {
  const [id, setId] = useState()

  return (
    <>
       {id}
       <Login onIdSubmit={setId}/>
    </>  
  )
}

export default App;
