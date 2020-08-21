import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Details from './components/Details/Details'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
       <div className="App">
         <Navbar/>
          <Switch>
            <Route path="/details" component={Details} />
            <Route path="/" component={Home} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
