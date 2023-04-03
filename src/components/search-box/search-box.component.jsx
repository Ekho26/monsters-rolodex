import './search-box.styles.css';

const SearchBox = (props) => {
  const { onSearchChange, placeholder, className } = props;
  return (
    <>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    </>
  );
}

export default SearchBox;