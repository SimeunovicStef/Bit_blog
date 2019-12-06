import React from 'react'
import { Link } from 'react-router-dom'
import { authorsServices } from '../../../service/Service-authors'

class AuthorsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: []
        }
    }
    componentDidMount() {
        authorsServices.fetchAuthors()
            .then(authors => {
                this.setState({ authors: authors })
            })
    }
    render() {
        const authors = this.state.authors.map(author => (
            <li>
                <h3><Link to={`/authors/${author.authorId}`}>{author.name}</Link></h3>
            </li>
        ))
        return authors
    }
}


const Authors = (props) => {
    return (
        <>
            <h3 className='post'>AUTHORS</h3>
            <AuthorsList />
        </>
    )
}
export default Authors