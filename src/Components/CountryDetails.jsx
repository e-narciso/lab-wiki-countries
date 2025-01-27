import React from "react";
import { Link } from "react-router-dom";
// import countries from "../countries.json"

const CountryDetails = props => {
  // const [country, setCountry] = useState({});

  // useEffect = () => {
    const getCountry = cca3 => {
      const theCountry = oneCountry => {
        return oneCountry.cca3 === cca3;
      };
      return props.countries.find(theCountry);
    };

    const getCountry2 = cca3 => {
      const theCountry = oneCountry => {
        return oneCountry.cca3 === cca3;
      };
      return props.countries.find(theCountry);
    };

    const { params } = props.match;
    const foundCountry = getCountry(params.cca3);
    // setCountry(foundCountry);
    console.log(props, foundCountry, props.countries, params);
  // };


  const getBorders = x => {
    if (x.length === 0) {
      return <li>None</li>;
    } else
      return x.map((each, i) => {
        const country = getCountry2(each);
        return (
          <li key={i}>
            <Link to={`/${each}`}>{country.name.common}</Link>
          </li>
        );
      });
  };

  const borders = getBorders(foundCountry.borders);
  // console.log(foundCountry);

  return (
    <div className="col-7 text-justify">
    can I see this
      <h1>{foundCountry.name.common}</h1>
      <h6>
        <em>{foundCountry.name.official}</em>
      </h6>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="capital">Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{borders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
