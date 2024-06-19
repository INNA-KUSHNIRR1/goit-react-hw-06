import ContactList from './components/ContactList/ContactList';
// import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <>
      <Logo />
      <SearchBox />
      {/* <ContactForm /> */}
      <ContactList />
    </>
  );
}

export default App;
