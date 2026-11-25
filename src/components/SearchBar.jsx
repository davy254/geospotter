function SearchBar({ searchText, onSearchChange }) {
  return (
    <label className="search-bar">
      Search locations by name:
      <input
        type="text"
        placeholder="Example: Nairobi"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </label>
  );
}

export default SearchBar;