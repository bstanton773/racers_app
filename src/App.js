import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Blog from './views/Blog';
import Cart from './views/Cart';
import Contact from './views/Contact';
import Home from './views/Home';
import PostDetail from './views/PostDetail';
import ProductDetail from './views/ProductDetail';
import Shop from './views/Shop';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      name: "Brian Stanton",
      racers: [],
      cart: []
    }
  }

  addToCart = (product) =>{
    this.setState(
      {
        cart: this.state.cart.concat(product)
      }
    )
  }

  removeFromCart = (product) => {
    let newCart = [...this.state.cart]

    for (let i = 0; i < newCart.length; i++){
      if (product.id === newCart[i].id){
        newCart.splice(i, 1)
        break;
      }
    }
    this.setState(
      {
        cart: newCart
      }
    )
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

  sumCartProducts = (aList) => {
      let total = 0;
      for (let i = 0; i < aList.length; i++){
          total += aList[i].price
      }
      return total.toFixed(2)
  }

  render() {
    return (
      <div>
        
        <Navbar cart={this.state.cart} sumCartProducts={this.sumCartProducts} />
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home name={this.state.name} racers={this.state.racers} handleSubmit={this.handleSubmit} />} />
            <Route exact path="/about" render={() => <About name={this.state.name} />} />
            <Route exact path="/contact" render={() => <Contact name={this.state.name} />} />
            <Route exact path="/shop" render={() => <Shop addToCart={this.addToCart} />}/>
            <Route exact path="/cart" render={() => <Cart cart={this.state.cart} sumCartProducts={this.sumCartProducts} removeFromCart={this.removeFromCart}/>} />
            <Route exact path="/shop/:id" render={({ match }) => <ProductDetail match={match} addToCart={this.addToCart}/>}/>
            <Route exact path="/blog" render={() => <Blog />} />
            <Route exact path="/blog/:id" render={({ match }) => <PostDetail match={match} />}/>
          </Switch>
        </main>
      </div>
    )
  }
}

