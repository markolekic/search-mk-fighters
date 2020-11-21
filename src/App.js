import React, { useState } from 'react';
import fighterData from './fighterData';
import Search from './Search'
import Origin from './Origin'
import Fighters from './Fighters'

const allOrigins = ['all realms', ...new Set(fighterData.map((fighter) => fighter.origin))];
const copyright = '© 2020 Marko Lekic';
const warningMsg = 'fighter not found, try again';

const App = () => {
  const [fighters, setFighters] = useState(fighterData);
  const [origins] = useState(allOrigins);

  const filterNames = (query) => {
    if (query.length > 0) {
      const filteredNames = fighterData.filter((fighter)=>fighter.name.toLowerCase().startsWith(query.toLowerCase()));
        setFighters(filteredNames)
     } else {
      setFighters(fighterData)
    } 
  }

  const filterOrigin = (origin) => {
    if (origin === 'all realms') {
      setFighters(fighterData)
      return;
    }
    const newFighters = fighterData.filter((fighter) => fighter.origin === origin)
    setFighters(newFighters);
  }

  return (
    <div className="App">
      <section className="section">
      <div className="title">
      <img className="mk-logo" src="./images/logo.png" alt="mk-logo"/>
      <Search filterNames={filterNames}/>
      <Origin origins={origins} filterOrigin={filterOrigin}/>
      {
        fighters.length > 0 ? 
        <Fighters fighters={fighters} /> : 
        <div className="error-msg">
          <h1>{warningMsg}</h1>
          <img className="fatality-photo" src="./images/fatality.png" alt="fatality"/>
        </div>
      }
      </div>
      </section>
      <footer>
        <h4>{copyright}</h4>
      </footer>
    </div>
  );
}

export default App;