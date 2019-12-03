import React from "react"
// import { StorageServices } from "../../shared/storageService";
import Link from 'react-router-dom/Link'
// import { StorageServices } from '../../shared/storageService'

// export class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             content: "",
//             createdPosts: []
//         }
//     }

//     return(
//         onSave() = (event) => {
//             event.preventDefault();
//             const titleValue = this.state.title;
//             const contentValue = this.state.body;

//             const myPost = {
//                 title: titleValue,
//                 body: contentValue,
//                 userId: 15
//             }
//             postService.createPost(myPost)
//                 .then(myResponse => {
//                     const createdPost = myResponse
//                     const storedPosts = StorageServices.getData('posts')
//                     storedPosts.push(createdPost)
//                     this.setState({
//                         createdPosts: allCreatedPosts
//                     })
//                     StorageServices.saveData('posts', storedPosts)
//                     StorageServices.saveData('createdPosts', this.state.createdPosts)
//                 })
//             this.setState({
//                 title: "",
//                 body: ""
//             })

//         }



// handleChange = (event) => {
//     const field = event.target.name
//     this.setState({
//         [field]: event.target.value
//     })
// }





// render() {

const NewPost = (props) => {
    return (

        <>
            <h2>New Post</h2>
            <label for='title'>Title</label> <br />
            <input type='text' name='title' id='title'></input> <br />
            <label for='content'>Content</label> <br />
            <textarea rows='10' cols='10'></textarea> <br />
            <Link to='/'><button className='cancel'>Cancel</button></Link> <button className='save'>Save</button>
        </>
    )
}


export default NewPost