import { FaUserAlt } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import style from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={style.card}>
      <div className={style.user}>
        <h2 className={style.nameUser}>
          <FaUserAlt className={style.iconUser} size={18} />
          {name}
        </h2>
        <a href={`tel: +${number}`}>
          <ImPhone className={style.iconPhone} size={18} />
          {number}
        </a>
      </div>
      <div className={style.boxBtn}>
        <button className={style.btn}>
          <RiEdit2Fill size={18} />
        </button>
        <button className={style.btn} onClick={onDelete}>
          <RiDeleteBin6Fill className={style.iconDelete} size={18} />
        </button>
      </div>
    </div>
  );
};
export default Contact;
