import React from "react";

// This is an example of Class Component
class AddContacts extends React.Component{
    state = {
        name:"",
        email:""
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
    }
    render(){
        return(
            <div className="ui main" style={{marginTop:50}}>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Your Name"  value={this.state.name} onChange={ (e)=> this.setState({name: e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="xyz123@example.com" value={this.state.email} onChange={ (e)=> this.setState({email: e.target.value})}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContacts;