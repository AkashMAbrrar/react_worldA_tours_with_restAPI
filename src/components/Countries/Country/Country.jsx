import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, capital, continents, maps, population } = country;
  console.log(country);
  return (
    <div className="country">
      <h3>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Capital City: {country.capital}</p>
      <p>Continents: {country.continents}</p>
      <p>Population: {country.population}</p>
      <p>
        Maps:{" "}
        <a href={country.maps.googleMaps} target="blank">
          Go on
        </a>
      </p>
    </div>
  );
};

export default Country;
