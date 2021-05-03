import React, { useContext } from 'react';
import { Loading, Table, Search, SearchText } from '../components';
import StarWarsContext from '../context/StarWarsContext';

function Planets() {
  const { isFetching } = useContext(StarWarsContext);
  return (
    <div>
      {' '}
      <Search />
      <SearchText />
      {isFetching ? <Loading /> : <Table />}
    </div>
  );
}

export default Planets;