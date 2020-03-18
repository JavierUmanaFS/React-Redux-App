import React from 'react';
import Beer from './components/Beer';
import './App.css';



function App() {
  // console.log(props.breweryInfo.map(beer => beer.street))
  return (
    <div className="App">
      <h1>Brewery</h1>
      <Beer />
    </div>
  );
}


export default App;
