import { useEffect, useState } from 'react';
import PostCard from './PostCard';

export default function PostsList() {
    const [postslist, setPostslist] = useState([])

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch('https://dummyjson.com/posts')
                const data = await response.json()
                console.log(data)
                setPostslist(data.posts)
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        
        getPosts()
    }, [])
    
    const listItem = postslist.map((post) => {
        return (
                <PostCard key={post.id} id={post.id} tags={post.tags} title={post.title}>
                    {post.body}
                </PostCard>
            
        )
    })

    return (
        <div className='card-container'>

            <div className="card-container">   
                {listItem}
            </div>
        </div>
    );
}
