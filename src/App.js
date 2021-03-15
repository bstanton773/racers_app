import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/contact" render={() => <Contact />} />
          </Switch>
        </main>
      </div>
    )
  }
}

