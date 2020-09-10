import React, { Component } from "react";

import Contact from "./contact.js";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    gender: "unknown",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

class Contacts extends Component {
  state = {
    contacts: [...contacts],
    search: "",
  };

  setGender(gender) {
    if (gender === "male") return "male";
    else if (gender === "female") return "female";
    else return "unknow";
  }

  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });

    this.setState({
      contacts: [
        ...contacts.filter((el) => {
          return (
            el.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.phone.includes(e.target.value)
          );
        }),
      ],
    });
  };

  render() {
    return (
      <div className="fullInfo">
        <div className="inputValue">
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleSearchChange}
            placeholder="search"
          />
        </div>
        <div className="allContacts">
          {this.state.contacts.map((contact, i) => (
            <Contact
              firstName={contact.firstName}
              lastName={contact.lastName}
              phone={contact.phone}
              gender={this.setGender(contact.gender)}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Contacts;