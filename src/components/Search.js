import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Search() {
  const { handleFilterName } = useContext(StarWarsContext);

  return (
    <div>
      <form>
        <label htmlFor="search">
          Filtre o filme pelo nome:
          <input
            name="search"
            type="text"
            data-testid="name-filter"
            onChange={ ({ target }) => handleFilterName(target.value) }
          />
        </label>
      </form>
    </div>
  );
}

export default Search;