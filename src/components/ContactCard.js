import React from "react";
import user from '../images/user.svg';

const ContactCard = (props) => {

    const { id, name, email } = props.contact;

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="User" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon"
            style={{color:'red',marginTop:'6px'}}></i>
        </div>
    );

};

export default ContactCard;