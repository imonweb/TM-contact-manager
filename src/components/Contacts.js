import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {

    deleteContact = (id) => {
      // console.log(id);
      const { contacts } = this.state;

      const newContacts = contacts.filter(contact => contact.id !== id);

      this.setState({
        contacts: newContacts
      });
    };
 

  render() {
    return (
      <Consumer>
        {value => {
          const { contact } = value;
          return (
            <React.Fragment>
              {value.map(contact => (
                <Contact 
                  key={contact.id}
                  contact={contact} 
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  
  }
}

export default Contacts;