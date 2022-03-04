import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends Component {
   state = {
      contacts: [
        {
          id: 1,
          name: 'Johnn Doe',
          email: 'jdoe@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: 2,
          name: 'Karen Williams',
          email: 'karen@gmail.com',
          phone: '555-555-4444'
        },
        {
          id: 3,
          name: 'Henry Johnsonn',
          email: 'henry@gmail.com',
          phone: '555-555-3333'
        }
      ]
    };
 

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact 
            key={contact.id}
            contact={contact} 
             
          />
        ))}
      </div>
    )
  }
}

export default Contacts;