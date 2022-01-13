import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route path='/'  />
        </Switch>
    </div>
  );
}

export default App;
