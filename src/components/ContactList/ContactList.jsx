import React, { Component } from 'react';

import css from './ContactList.module.css';

export default class ContactList extends Component {
  render() {
    return (
      <ul className={css.contactList}>
        {this.props.filteredContacts.map(({ id, name, number }) => (
          <li className={css.contactListItem} key={id}>
            <button
              className={css.contactDeleteBtn}
              onClick={() => this.props.handleDeleteContact(id)}
            >
              ❌
            </button>
            <span>
              {name}: {number}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
