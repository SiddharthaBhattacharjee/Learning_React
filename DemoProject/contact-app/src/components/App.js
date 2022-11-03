
import './App.css';
import React, { useState, useEffect } from "react";// Usestate React hook will be used to update the contacts 
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // All the router components needed
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from './ContactDetails';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(()=>{
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  });

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id:Math.floor(Math.random() * 100000000), ... contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container' style={{overflowY:'hidden'}}>
      <Router>
        <Header></Header>
        <Routes> {/* check point 7 on notes */}
          <Route path="/" exact element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}></Route>{/* The contacts = {contacts} is a property that will be passed to the actual component from where it is imported*/}
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler}/>}></Route> {/*This is a handler which helps in passing of data from child to parent i.e. from addcontact to contacts in this place */}
          <Route path="/contact/:id" element={<ContactDetails></ContactDetails>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
