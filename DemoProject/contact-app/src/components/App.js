
import './App.css';
import React, { useState, useEffect } from "react";// Usestate React hook will be used to update the contacts 
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(()=>{
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  });
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);

  }

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container'>
      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>{/*This is a handler which helps in passing of data from child to parent i.e. from addcontact to contacts in this place */}
      <ContactList contacts={contacts}></ContactList>{/* The contacts = {contacts} is a property that will be passed to the actual component from where it is imported*/}
    </div>
  );
}

export default App;
