import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom'

export default class Blog extends Component {
    constructor(){
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/blog/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts : data }))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.posts.reverse().map(p => (
                        <li className="list-group-item" key={p.id}> 
                            <div>
                                <Link to={`/blog/${p.id}`}>
                                    <strong>{p.title}</strong>
                                </Link>
                            </div>
                            <div>
                                <small>{moment(p.date_created).fromNow()}</small>
                            </div>
                            <cite>&mdash; {p.user}</cite>
                        </li>
                    )
                )}
            </ul>
        )
    }
}
