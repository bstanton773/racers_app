import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    // sumCartProducts = aList => {
    //     let total = 0;
    //     for (let i = 0; i < aList.length; i++){
    //         total += aList[i].price
    //     }
    //     return total.toFixed(2)
    // }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">
                                    Shop 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    Cart &nbsp;
                                    <span className="bg-light"><i className="fa fa-shopping-cart"></i> {this.props.cart.length} | ${this.props.sumCartProducts(this.props.cart)} </span>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
