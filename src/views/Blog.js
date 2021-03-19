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

    async componentDidMount(){
        let token = await this.props.getToken()
        let res = await fetch('http://localhost:5000/blog/posts', {
            headers: {
                'Authorization': 'Bearer ' + token['token']
            }
        })
        let posts = await res.json()
        this.setState( { posts: posts })
    }

    render() {
        return (
            <React.Fragment>

            <Link to="/createpost"><button className="btn btn-primary">Create a Post</button></Link>
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
            </React.Fragment>
        )
    }
}
