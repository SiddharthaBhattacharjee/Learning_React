import React from "react";
import { useNavigate } from 'react-router-dom'; // for programattic navigations
import { useState } from "react";

const AddContacts = (props) => {
    const [state, setState] = useState({name:"",email:""});
    const navigate = useNavigate();
    function add(e) {
        e.preventDefault();
        if(state.name === "" || state.email === ""){
            alert("All the fields are mandatory");
            return;
        }
        props.addContactHandler(state);
        setState({name:"",email:""});
        navigate('/'); // we navigated to home programatically.
    }
    return(
        <div className="ui main" style={{marginTop:50}}>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Your Name"  onChange={ (e)=> {state.name = e.target.value}}></input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="xyz123@example.com" onChange={ (e)=> {state.email = e.target.value}}></input>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}

// This is an example of Class Component
// class AddContacts extends React.Component{

    

//     state = {
//         name:"",
//         email:"",
//     }

//     goHome = () => {return(<Navigate to="/" />);}; // define
        

//     add = (e) => {
//         e.preventDefault();
//         if(this.state.name === "" || this.state.email === ""){
//             alert("All the fields are mandatory");
//             return;
//         }
//         this.props.addContactHandler(this.state);
//         this.setState({name:"",email:""});
//         this.goHome(); // call
//         // go back to home page here
//     }
//     render(){
//         return(
//             <div className="ui main" style={{marginTop:50}}>
//                 <h2>Add Contact</h2>
//                 <form className="ui form" onSubmit={this.add}>
//                     <div className="field">
//                         <label>Name</label>
//                         <input type="text" name="name" placeholder="Your Name"  value={this.state.name} onChange={ (e)=> this.setState({name: e.target.value})}></input>
//                     </div>
//                     <div className="field">
//                         <label>Email</label>
//                         <input type="email" name="email" placeholder="xyz123@example.com" value={this.state.email} onChange={ (e)=> this.setState({email: e.target.value})}></input>
//                     </div>
//                     <button className="ui button blue">Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

export default AddContacts;