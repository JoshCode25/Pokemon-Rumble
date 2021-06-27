  
import React from 'react';

const SearchBox = ({ updateInput }) => {
  return (
    <div className='pa2 flex justify-center'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        id='searchIdentifier'
        type='search'
        placeholder='Name/Id'
        onInput={updateInput}
      />
      <input
        className='pa3 ba b--green bg-lightest-blue'
        id='searchLevel'
        type='number'
        min='1'
        max='100'
        placeholder='Level'
        onInput={updateInput}
      />
      <input
        type='button'
        value='submit'
      />
    </div>
  );
}

export default SearchBox;