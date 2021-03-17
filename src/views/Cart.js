import React, { Component } from 'react'

export default class Cart extends Component {
    getQuantity = (cartItem, cartList) =>{
        let count = 0;
        for (let i=0; i < cartList.length; i++){
            if (cartItem.id === cartList[i].id){
                count ++;
            }
        }
        return count
    }

    getUniqueCart = (cart) =>{
        let uniqueCart = [];
        let ids = new Set();
        for(let i of cart){
            // console.log(i)
            if(!ids.has(i['id'])){
                uniqueCart.push(i);
                ids.add(i['id']);
            }
        }
        return uniqueCart
    }

    render() {
        const uniqueCart = this.getUniqueCart(this.props.cart)
        return (
            <React.Fragment>
                { uniqueCart.length > 0 ? (
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Subtotal</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {uniqueCart.map(p => (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.name}</td>
                                        <td>{this.getQuantity(p, this.props.cart)}</td>
                                        <td>${p.price}</td>
                                        <td>${this.getQuantity(p, this.props.cart) * p.price}</td>
                                        <td>
                                            <button onClick={() => this.props.removeFromCart(p)} className="btn btn-danger">Remove</button>
                                        </td>
                                    </tr>
                                    )
                                )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>TOTAL</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>${this.props.sumCartProducts(this.props.cart)}</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                ) :
                (
                    <h3>You Have No Items in Your Cart. Please Add Some</h3>
                )
            }
        </React.Fragment>
        )
    }
}
