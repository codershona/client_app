import React from "react";

const SearchFoodBox = ({ searchfield, searchChange }) => {
    return (
    <div>
      <input
      className='pa3 ba b--green bg-lighten-blue'
      type='search'
      placeholder='search your fav food'
      onChange={searchChange}
      />
    </div>
    );
};

export default SearchFoodBox;