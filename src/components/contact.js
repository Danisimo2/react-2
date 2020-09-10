import React from 'react';

const Contact = ({firstName, lastName, phone, gender}) =>(
	<div className="container">
	  <div className="userInfo">
	    <div className="fullName">
	      <div className="firstName">
	        {firstName}
	      </div> 
	      <div className="lastName">
	        {lastName}
	      </div>
	    </div>
	    <div className="phone">
	      {phone}
	    </div>
	    <div className="gender">
	      {gender}
	    </div>
	  </div>
	</div>
);

export default Contact;