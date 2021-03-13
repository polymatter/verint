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
  const astroURL = 'http://api.open-notify.org/astros.json';
  const [astros, setAstros] = useState({ people: [] });
  useEffect(async () => {
    const response = await axios(astroURL);
    setAstros(response.data);
  }, []);

  return (
    <div className="App">
      <button onClick={toggleTableVisibility}>{isTableShown ? 'Hide' : 'Show'} Table</button>
      { isTableShown &&
        <DataTable headings={['name', 'craft']} items={astros.people} />
      }
    </div>
  );
}

export default App;
