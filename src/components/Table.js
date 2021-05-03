import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './table.css';

function Table() {
  const { responseFilter } = useContext(StarWarsContext);
  const cabecalho = [
    'Nome',
    'Rotação',
    'Orbita',
    'Diametro',
    'Clima',
    'Gravidade',
    'Tipo de solo',
    'Água na superfice',
    'Population',
    'Filmes',
    'Criado',
    'Editado',
  ];
  return (
    <div>
      <table>
        <thead>
          <tr>
            {cabecalho.map((tipagem, index) => (
              <th key={ index }>
                {' '}
                {tipagem}
                {' '}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          { responseFilter.map((planet) => (
            <tr key={ planet.name }>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;