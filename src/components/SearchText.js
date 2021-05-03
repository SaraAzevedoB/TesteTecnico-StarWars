import React, { useContext } from "react";
import StarWarsContext from "../context/StarWarsContext";

function SearchText() {
  const { handleFilterNumber, handleClickFilter, columns } = useContext(
    StarWarsContext
  );
  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={({ target }) => handleFilterNumber(target.name, target.value)}
      >
        {columns.map((column, index) => (
          <option value={column} key={index}>
            {column}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={({ target }) => handleFilterNumber(target.name, target.value)}
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="filtraNumber">
        Insira o numero:
        <input
          name="value"
          onChange={({ target }) =>
            handleFilterNumber(target.name, target.value)
          }
          type="number"
          data-testid="value-filter"
        />
      </label>
      <button
        onClick={handleClickFilter}
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <button type="button">X</button>
    </div>
  );
}

export default SearchText;
