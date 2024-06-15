import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import Logo from './components/Logo/Logo';

function App() {
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
