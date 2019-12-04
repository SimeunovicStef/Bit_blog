import React from 'react'
import { Link } from 'react-router-dom'
import { postsServices } from '../../../service/PostsService'
import { authorsServices } from "../../../service/Service-authors"
class SinglePosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: {},
            singlePost: null
        }
    }
    componentDidMount() {
        let postId = this.props.match.params.id;

        postsServices.fetchSinglePost(postId)
            .then(singlePost => {
                this.setState({ singlePost })
            })
            .then(() =>
                authorsServices.fetchSingleAuthor(this.state.singlePost.userId)
                    .then(author => {
                        this.setState({
                            author: author
                        })
                    }
                    ))
    }


    render() {
        if (!this.state.singlePost) {
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <button className='back'><Link to='/posts/'>Back</Link></button>
                <h3>{this.state.singlePost.title}</h3>
                <h5><a>{this.state.author.name}</a></h5>
                <p>{this.state.singlePost.body}</p>
                <hr />
                <h4>3 more posts from same author</h4>
                <a></a>
            </div>
        )
    }
}
export default SinglePosts