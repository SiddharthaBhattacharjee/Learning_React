import React, { useState } from "react"; 
import { Link } from 'react-router-dom';
import user from "../images/user.png";


const ContactCard = (props) => { // props to get the list from call to here
    const name = props.contact.name;
    const email = props.contact.email;
    const id = props.contact.id;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user dp"></img>
            <div className="content">
                <Link to={`/contact/${id}`} state={{from:props.contact}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
                <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}} onClick={()=> {props.clickHandler(id)}}></i> {/*This is how to give inline css properties */}
            </div>
        </div>
    );
};

export default ContactCard;