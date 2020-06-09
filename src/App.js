import React from 'react';
import logo from './logo.svg';
import './App.css';
import Internships from './Components/internship.js';
import InternshipDetail from './Components/InternshipDetail.js';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Internships}/>
        <Route path = '/:internship_id' component={InternshipDetail}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
