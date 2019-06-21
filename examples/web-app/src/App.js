import React, { useState, useEffect } from 'react';
import { duckIt } from 'duck-it';
import logo from './logo.svg';
import './App.css';

const loading = Symbol('loading');
const loaded = Symbol('loaded');
const error = Symbol('error');

function App() {
  const [result, setResult] = useState(undefined);
  const [state, setState] = useState(loading);

  useEffect(
    () => {
      duckIt('bart simpsons', { noHtml: true })
        .then(data => { setResult(data); setState(loaded) })
        .catch(() => setState(error));
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {state === loading && 'Loading...'}
      {state === error && 'Sorry, shits happen'}
      {state === loaded && result.data.Abstract}
    </div>
  );
}

export default App;
