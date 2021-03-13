import './App.css';
import { useState, useEffect } from 'react'
import DataTable from './components/DataTable';
import axios from 'axios';

function App() {

  // using the State hook in order to keep a boolean of whether the table is to be shown or not
  const [isTableShown, setIsTableShown] = useState(true);
  const toggleTableVisibility = () => {
    setIsTableShown(!isTableShown);
  }

  // use the Effect hook and the State hook together in order to get data for the table
  // pass [] as the second parameter of useEffect to only update on initial render
  const countriesURL = 'http://api.nobelprize.org/v1/country.json';
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios(countriesURL);
      setCountries(response.data.countries);
    }
    fetchData();
  }, []);

  const [filterText, setFilterText] = useState("");
  const filterChange = event => {
    setFilterText(event.target.value);
  } 

  return (
    <div className="App">
      <button className="tableToggle" onClick={toggleTableVisibility}>{isTableShown ? 'Hide' : 'Show'} Table</button>
      <input type="text" onChange={filterChange} placeholder="Filter"/>
      { isTableShown &&
        <DataTable headings={['name', 'code']} caption='Countries that have won Nobel Prizes' items={countries} filterText={filterText}/>
      }
    </div>
  );
}

export default App;
