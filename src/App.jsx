import { useEffect, useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import Logo from './components/Logo/Logo';
import { useSelector } from 'react-redux';
import { selectContacts } from './redux/selectors';

const date = [];

function App() {
  // const contacts = useSelector(selectContacts);
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return date;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Logo />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
