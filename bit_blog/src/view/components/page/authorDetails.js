import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { authorsServices } from '../../../service/Service-authors'
import { randomPictureEndpoint } from '../../../shared/constants'

export class AuthorDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureSrc: ""
        }
    }

    componentDidMount() {
        authorsServices.fetchRandomPicture(randomPictureEndpoint)
            .then(pictureSrc => {
                this.setState({
                    pictureSrc
                })
            })
    }


    render() {
        const { name, username, email, street, city, zipcode, phone, companyName, slogan } = this.props.author
        return (
            <main className='container'>
                <span className='center-align'><Link to='/authors' className='left'><button>All authors</button></Link></span>
                <div className='row'>
                    <h3 className="authr1">{name}</h3>
                    <div className='col s3'>
                        <img src={this.state.pictureSrc} alt='' className='image' />
                    </div>
                    <div className='col s6 imgcol'>

                        <p>Username: {username}</p>
                        <p>email: {email}</p>
                        <p>phone: {phone}</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='row section'>
                    <div className='col s6'>
                        <h4>Adress</h4>
                        <p>Street : {street}</p>
                        <p>City: {city}</p>
                        <p>Zipcode:{zipcode}</p>
                    </div>
                    <div className='col s6'>
                        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22643.34190323202!2d20.46741305!3d44.8130537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab2453c4ba1%3A0xb81037438bba0036!2sRepublic%20Square!5e0!3m2!1sen!2srs!4v1575390465091!5m2!1sen!2srs"} frameBorder='0' allowFullScreen title='singleAuthor'></iframe>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='row section'>
                    <div className='col s6'>
                        <h4>Company</h4>
                        <p>companyName : {companyName}</p>
                        <p>slogan: {slogan}</p>

                    </div>
                </div>
            </main>
        )
    }
}