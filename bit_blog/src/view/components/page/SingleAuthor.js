import React from 'react'
import { Link } from 'react-router-dom'
import { authorsServices } from '../../../service/Service-authors'
import { authorDetails, AuthorDetails } from '../page/authorDetails'

class SingleAuthor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: null
        }
    }

    componentDidMount() {
        const authorId = this.props.match.params.id;
        console.log(authorId);
        authorsServices.fetchSingleAuthor(authorId)
            .then(author => {
                this.setState({ author: author })
            });
    }

    render() {
        if (!this.state.author) {
            return <h2>Loading...</h2>
        }
        const { author } = this.state
        return (
            <AuthorDetails author={author} />
        )
    }
}
export default SingleAuthor