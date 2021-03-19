import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class CreatePost extends Component {
    constructor(){
        super();

        this.state = {
            redirect: null
        }
    }

    async createPost(e){
        e.preventDefault();
        let token = await this.props.getToken()
        let res = await fetch('http://localhost:5000/blog/createpost', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token['token'],
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": e.target.title.value,
                "content": e.target.content.value
            })
        })
        let newPost = await res.json();
        this.setState({ redirect: `/blog/${newPost.id}`})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <form onSubmit={(e) => this.createPost(e)}>
                    <input type="text" className="form-control" name="title" placeholder="Title" />
                    <input type="text" className="form-control" name="content" placeholder="Content" />
                    <button type="submit" className="btn btn-outline-info">Submit</button>
                </form>
            </div>
        )
    }
}
