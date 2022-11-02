import React from "react";
import {Link} from 'react-router-dom';// for changing link on clicking add contact
import ContactCard from "./ContactCard";

const ContactList = (props) => { // Props helps accessing the properties added during use in imported place i.e. App.js
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact)=>{ // Creates the contacts 
        console.log(contact);
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        );
    });

    return(
        <div className="ui celled list" style={{marginTop:60}}>
            <div  style={{display:'flex', justifyContent:'space-between', marginBottom:20}}>
                <h2>Contacts List</h2>
                <Link to="/add">
                    <button className="ui button blue right" style={{marginBottom:20}}>+</button>
                </Link>
            </div>
            
            {renderContactList /*We are not using () since we are not calling the function, we are referencing it here for it to execute*/}
        </div>
    );
}

export default ContactList;