import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const p = this.props.product
        return (
            <div className="col-md-4">
                <div className="card">
                    <img src={p.image} className="img-fluid" alt={p.name} />
                    <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
