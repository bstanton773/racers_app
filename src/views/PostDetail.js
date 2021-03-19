import React, { Component } from 'react'
import moment from 'moment';

export default class PostDetail extends Component {
    constructor(){
        super();

        this.state = {
            post: {}
        }
    }

    async componentDidMount(){
        let token = await this.props.getToken()
        let res = await fetch(`http://localhost:5000/blog/posts/${this.props.match.params.id}`, {
            headers: {
                'Authorization': 'Bearer ' + token['token']
            }
        })
        let post = await res.json()
        this.setState( { post: post })
    }

    render() {
        const p = this.state.post
        return (
            <div>
                <li className="list-group-item">
                    <div>
                        <strong>{p.title}</strong>
                    </div>
                    <p>{p.content}</p>
                    <div>
                        <small>{moment(p.date_created).fromNow()}</small>
                    </div>
                    <cite>&mdash; {p.user}</cite>
                </li>
            </div>
        )
    }
}
