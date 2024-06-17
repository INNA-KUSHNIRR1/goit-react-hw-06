import { useDispatch, useSelector } from 'react-redux';
import style from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <section className={style.sectionSearch}>
      <div className={style.searchBox}>
        <span>Find contacts by name</span>
        <input
          type="text"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
          placeholder="search..."
          autoFocus
        ></input>
      </div>
    </section>
  );
};
export default SearchBox;
