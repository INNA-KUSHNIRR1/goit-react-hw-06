import { FaUserAlt } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import style from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={style.card}>
      <div className={style.user}>
        <h2 className={style.nameUser}>
          <FaUserAlt className={style.iconUser} />
          {name}
        </h2>
        <a href={`tel: +${number}`}>
          <ImPhone className={style.iconPhone} size={24} />
          {number}
        </a>
      </div>
      <button className={style.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
