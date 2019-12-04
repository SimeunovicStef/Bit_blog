import React from 'react'

const SingleAuthor = (props) => {
    return (
        <>
            <div>
                <button className=''>All authors</button>
                <h3 className='post'>Single Author</h3>
                <img></img>
                <h5>Name Surname</h5>
                <span>username: </span> <br />
                <span>email: </span> <br />
                <span>phone: </span> <br />
            </div>
            <hr />
            <div>
                <h4>Address</h4>
                <p>Street: {street}</p>
                <p>city: {city}</p>
                <p>zipcode: {zipcode}</p>
                <iframe></iframe>
            </div>
            <hr />
            <div>
                <h4>Company</h4>
                <p>name:{name}</p>
                <p>slogan{slogan}</p>
            </div>

        </>
    )
}
export default SingleAuthor