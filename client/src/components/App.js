import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import './App.css';
import Login from './login.js';
import Dashboard from './Dashboard'
import { ContactsProvider } from '../Contexts/ContactsProvider';
import { ConversationsProvider } from '../Contexts/ConversationsProvider';

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id}></Dashboard>
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
    
       id ? dashboard :  <Login onIdSubmit={setId}/> 
      
      
  )
}

export default App;
