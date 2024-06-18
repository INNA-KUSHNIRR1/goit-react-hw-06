import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import { selectContacts, selectNameFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const foundContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <section className={style.sectionList}>
      <ul className={style.list}>
        {foundContacts.map(contact => {
          return (
            <li key={contact.id} className={style.item}>
              <Contact data={contact} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ContactList;
