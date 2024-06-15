import { useDispatch, useSelector } from 'react-redux';
import style from './SearchBox.module.css';
import { valueFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  console.log(value);
  return (
    <div className={style.searchBox}>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(valueFilter(e.target.value))}
        placeholder="search..."
      ></input>
    </div>
  );
};
export default SearchBox;
