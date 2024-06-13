import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ values, onDelete }) => {
  return (
    <ul className={style.list}>
      {values.map((value) => {
        return (
          <li key={value.id}>
            <Contact data={value} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
