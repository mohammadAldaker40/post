import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../http';
import Post from '../components/post';

export default function PostDetailesPage() {
    const { id } = useParams();
    const [post, setPost] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function getPost() {
            try {
                const postData = await getPostById(id);
                setPost(postData);
            } catch (error) {
                console.error('Error fetching post:', error);
                setError('Failed to load post');
            } 
        }
        
        if (id) {
            getPost();
        }
    }, [id]);

    if (error) return <div>{error}</div>;
    if (!post) return <div>Post not found</div>;

    console.log(post);
    return (
        <Post className="post-details-container" reactions={post.reactions} title={post.title} body={post.body} tags={post.tags} />
    );
}

