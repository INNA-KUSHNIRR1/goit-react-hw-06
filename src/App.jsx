import { useEffect, useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import { MdOutlineContacts } from 'react-icons/md';

const date = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return date;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const foundContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };
  return (
    <>
      <div className="divWrapper">
        <h1 className="title">
          <MdOutlineContacts className="icon" size={50} />
          <br />
          Phonebook
        </h1>
      </div>

      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList values={foundContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
