import React from "react";
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
        <div className="ui celled list">
            {renderContactList /*We are not using () since we are not calling the function, we are referencing it here for it to execute*/}
        </div>
    );
}

export default ContactList;