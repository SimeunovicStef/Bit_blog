import Post from '../models/Post'
import { postsEndpoint } from '../shared/constants'
import { storageServices } from '../shared/storageService'

class PostServices {
    fetchPosts(postsEndpoint) {
        return fetch(postsEndpoint)
            .then(response => response.json())
            .then(myData => {
                const postsList = this.adaptPostData(myData)
                storageServices.saveData('posts', postsList)
                return postsList;
            })
    }

    creatPostInstance(post) {
        let { title, body, id, userId } = post;
        title = `${title.charAt(0).toUpperCase()}`
        body = `${body.charAt(0).toUpperCase()}`
        return new Post(title, body, id, userId);
    }

    adaptPostData(postData) {
        const myPostData = postData.map(post => {
            return this.creatPostInstance(post)
        })
        return myPostData
    }

    deletePost(postId, postsEndpoint) {
        return fetch(`${postsEndpoint}/${postId}`, {
            method: 'DELETE'
        })
    }

    getPosts() {
        const posts = storageServices.getData('posts');
        const adaptedPosts = this.adaptPostData(posts)
        return adaptedPosts
    }

    fetchSinglePost(id) {
        const singlePostEndpoint = `${postsEndpoint}/${id}`
        return fetch(singlePostEndpoint)
            .then(response => response.json())
            .then(data => this.creatPostInstance(data))
    }


    createPost(myPost) {
        return fetch(postsEndpoint, {
            method: 'POST',
            body: JSON.stringify(myPost)
            // headers: {
            //     'Content-Type':'application/json'
            // }
        })
            .then(response => response.json())
            .then((myPost) => {
                return this.creatPostInstance(myPost)
            })
    }
}

export const PostService = new PostServices();