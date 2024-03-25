//import React from 'react'

const SearchBox = ({ filter, handleFilter }) => {
  return (
    <div>
      <h2>Search users</h2>
      <input type="text" value={filter} onChange={handleFilter} />
    </div>
  );
};

export default SearchBox;
