import React, { Component } from 'react'
import RelatedPostsItem from './RelatedPostsItem'
import { postsServices } from '../../../service/PostsService'

class RelatedPostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relatedPosts: null
        }
    }
    componentDidMount() {
        let authorId = this.props.post.userId;
        postsServices.fetchRelatedPosts(authorId)
            .then(relatedPosts => {
                this.setState({
                    relatedPosts
                })
            })
    }
    render() {
        if (!this.state.relatedPosts) {
            return <h3>...</h3>
        }
        const { relatedPosts } = this.state;
        return (
            <ul>
                {relatedPosts.map(relatedPost => {
                    return <RelatedPostsItem relatedPost={relatedPost} key={relatedPost.postId} />
                })
                }
            </ul>
        )
    }
}
export default RelatedPostList