import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      name: "Brian Stanton",
      racers: []
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e);
    let year = e.target.year.value;
    let season = e.target.season.value;
    fetch(`https://ergast.com/api/f1/${year}/${season}/driverStandings.json`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            })
        })
        .catch(error => console.log(error))
  }

  

  render() {
    return (
      <div>
        
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home name={this.state.name} racers={this.state.racers} handleSubmit={this.handleSubmit} />} />
            <Route path="/about" render={() => <About name={this.state.name} />} />
            <Route path="/contact" render={() => <Contact name={this.state.name} />} />
          </Switch>
        </main>
      </div>
    )
  }
}

