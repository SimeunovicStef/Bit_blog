import React from 'react'
import { Link } from 'react-router-dom'
import { postsServices } from '../../../service/PostsService'
import { authorsServices } from "../../../service/Service-authors"
import RelatedPostList from './RelatedPostsList'

class SinglePosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: {},
            singlePost: null,
            relatedPosts: []
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

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadPost();
        }
    }

    loadPost = () => {
        postsServices.fetchSinglePost(this.props.match.params.id)
            .then(postData => {
                this.setState({
                    singlePost: postData
                })
            })
    }


    render() {
        if (!this.state.singlePost) {
            return <h1>Loading...</h1>
        }
        const { authorId } = this.state.author
        return (
            <div>
                <button className='back'><Link to='/posts/'>Back</Link></button>
                <h3>{this.state.singlePost.title}</h3>
                <h5><Link to={`/authors/${authorId}`}> {this.state.author.name}</Link></h5>
                <p>{this.state.singlePost.body}</p>
                <hr />
                <RelatedPostList post={this.state.singlePost} />
                <a></a>
            </div >
        )
    }
}
export default SinglePosts