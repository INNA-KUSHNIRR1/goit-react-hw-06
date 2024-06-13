import style from "./SearchBox.module.css";
const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={style.searchBox}>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="search..."
      ></input>
    </div>
  );
};
export default SearchBox;
