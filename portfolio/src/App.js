import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Landing} from './components/Landing'


function App() {
  return (
    <div className="App">
         <Router>
        <Navbar/>
         <Route exact path='/'component={Landing}/>
       </Router>
    </div>
  );
}

export default App;
