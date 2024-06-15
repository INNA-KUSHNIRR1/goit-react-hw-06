import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import { selectContacts, selectNameFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  console.log(contacts);
  console.log(filter);
  const foundContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <ul className={style.list}>
      {foundContacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
