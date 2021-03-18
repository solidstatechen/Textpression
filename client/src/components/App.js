import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import './App.css';
import Login from './login.js';

function App() {
  const [id, setId] = useLocalStorage('id')

  return (
    <>
       {id}
       <Login onIdSubmit={setId}/>
    </>  
  )
}

export default App;
