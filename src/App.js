import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setNayoks(data))
  }, [])




  // const nayoks = [{ name: 'ab' }, { name: 'bac' }, { name: 'bal' }]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok></Nayok>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
function MovieCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h5>Num of movie: {count}</h5>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return (
    <h4>Movies I have acted: {props.movies} </h4>
  )
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple'
  }
  return (<div style={nayokStyle}>
    <h1>ami kholnayok-{props.name}</h1>
  </div>
  )
}

export default App;
