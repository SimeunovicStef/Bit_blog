import React from "react"

const NewPost = (props) => {
    return (
        <>
            <h2>New Post</h2>
            <label for='title'>Title</label><br />
            <input type='text' name='title' id='title'></input><br />
            <label for='content'>Content</label><br />
            <textarea rows='10' cols='10'></textarea><br />
            <button className='cancel'>Cancel</button> <button className='save'>Save</button>
        </>
    )
}

export default NewPost