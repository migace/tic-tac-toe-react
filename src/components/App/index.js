import React, { Fragment } from 'react'
import Board from '../Board';
import './App.scss';

const App = () => (
  <div className="app">
    <Board width={480} height={480} />
  </div>
)

export default App;
