function TypeFilter({ types, selectedType, onTypeChange }) {
  return (
    <label className="type-filter">
      Filter by type:
      <select
        value={selectedType}
        onChange={(event) => onTypeChange(event.target.value)}
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </label>
  );
}

export default TypeFilter;