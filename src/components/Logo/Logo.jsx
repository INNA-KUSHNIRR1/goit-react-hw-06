import { MdOutlineContacts } from 'react-icons/md';
import style from './Logo.module.css';
const Logo = () => {
  return (
    <div className={style.divWrapper}>
      <h1 className={style.title}>
        <MdOutlineContacts className="icon" size={50} />
        <br />
        Phonebook
      </h1>
    </div>
  );
};
export default Logo;
