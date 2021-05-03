import React, { useContext } from "react";
import StarWarsContext from "../context/StarWarsContext";
import "./table.css";

function Table() {
  const { responseFilter, loading, cabecalho } = useContext(StarWarsContext);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {cabecalho.map((headerTable, index) => (
              <th key={index}>{headerTable}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {responseFilter.map((planet) => (
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
