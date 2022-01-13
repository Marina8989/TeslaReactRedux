import React from 'react';
import {Switch, Route} from 'react-router-dom';
//import Navbar from './components/Navbar';
import Home from './components/Home';
import './index.css';

function App() {
  return (
    <div>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/'  component={() => <Home />}/>
        </Switch>
    </div>
  );
}

export default App;
