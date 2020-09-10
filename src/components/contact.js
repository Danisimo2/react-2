import React from "react";

import user from "./img/user.svg"

const Contact = ({ firstName, lastName, phone, gender }) => (
  <div className="container">
    <div className="userInfo">
    <img src={user} alt="user" className="user" />
      <div className="fullName">
        <div className="firstName">{firstName}</div>
        <div className="lastName">{lastName}</div>
      </div>
      <div className="phone">{phone}</div>
      <div className="gender">{gender}</div>
    </div>
  </div>
);

export default Contact;
