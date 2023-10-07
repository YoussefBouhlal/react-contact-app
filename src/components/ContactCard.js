import React from "react";
import { Link } from "react-router-dom";
import user from '../images/user.svg';

const ContactCard = (props) => {

    const { id, name, email } = props.contact;

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="User" />
            <div className="content">
                <Link to={`/contact/${id}`} state={{contact:props.contact}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i className="trash alternate outline icon" style={{color:'red',marginTop:'6px'}} onClick={()=> props.clickHandler(id)} ></i>
        </div>
    );

};

export default ContactCard;