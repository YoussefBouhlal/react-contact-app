import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EditContact = (props) => {

    const location = useLocation();
    const { id, name, email } = location.state.contact;
    const navigate = useNavigate();
    const [state, setState] = useState({
        id,
        name,
        email
    });

    const update = (e) => { 
        e.preventDefault();

        if (state.name === "" || state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }

        props.updateContactHandler(state);
        setState({name:"", email:""});
        navigate('/');
    }

    return (
        <div className="ui main">
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e)=>setState({id:state.id,name:e.target.value,email:state.email})} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={state.email} onChange={(e)=>setState({id:state.id,name:state.name,email:e.target.value})} />
                </div>
                <button className="ui button blue">Update</button>
            </form>
        </div>
    );
}

export default EditContact;