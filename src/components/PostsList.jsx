import { useEffect, useState } from 'react';

export default function PostsList() {

    const [postslist, setPostslist] = useState([])

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch('https://dummyjson.com/posts')
                const data = await response.json()
                setPostslist(data.posts)
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        
        getPosts()
    }, [])
    
    const listItem = postslist.map((post) => {
        return (
            <li key={post.id}>{post.body}</li>
        )
    })

    return (
        <ul>
            <h1>Posts</h1>
            {listItem}
        </ul>
    );
}
