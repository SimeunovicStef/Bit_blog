import React from "react"
import Link from 'react-router-dom/Link'

const NewPost = (props) => {
    return (
        <>
            <h2>New Post</h2>
            <label for='title'>Title</label> <br />
            <input type='text' name='title' id='title'></input> <br />
            <label for='content'>Content</label> <br />
            <textarea rows='15' cols='50'></textarea> <br />
            <Link to='/'><button className='cancel'>Cancel</button></Link> <button className='save'>Save</button>
        </>
    )
}


export default NewPost