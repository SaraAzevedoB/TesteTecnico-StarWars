function PlanetApi() {
  const url = "https://swapi-trybe.herokuapp.com/api/planets";
  return fetch(url)
    .then((data) => data.json())
    .then((data) => data.results)
    .catch((error) => error);
}

export default PlanetApi;
