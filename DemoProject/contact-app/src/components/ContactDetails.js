import React, { useState } from "react"; 
import user from "../images/userpic.png";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

const ContactDetails = (props) => { // props to get the list from call to here
    const location = useLocation();
    const { from } = location.state;
    console.log(from);
    return(
        <div className="main" style={{padding:30,marginTop:60}}>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{from.name}</div>
                    <div className="description">{from.email}</div>
                </div>
            </div>
            <div style={{display:'flex',alignItem:'center',justifyContent:'center'}}>
                <Link to='/'><button className="ui button blue center">Back To Contact List</button></Link>
            </div>
        </div>
    );
};

export default ContactDetails;