import React from 'react'
import { Link } from 'react-router-dom';
import { postsServices } from '../../../service/PostsService'


class Posts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    postsServices.fetchPosts()
      .then(posts => {
        this.setState({ posts: posts })
      })
  }

  render() {
    const filteredposts = this.state.posts.map(post => (
      <li>
        <h3><Link to={'/posts/' + post.postId}>{post.title}</Link></h3>
        <p>{post.body}</p>
        <hr />
      </li>
    ))

    return filteredposts
  }

}

const Main = (props) => {
  return (
    <main>
      <h2 className='post'>POSTS</h2>
      <Posts />

    </main>
  )
}
export default Main