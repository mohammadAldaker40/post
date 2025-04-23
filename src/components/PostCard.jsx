import { useState } from 'react';
import { Link } from "react-router-dom"
import Post from './post';

export default function PostCard({ children, title, tags = [], id, onClick }) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="post-card" onClick={onClick}>
                <Link  id="linkpost" to={`/post/${id}`} >
                    <h2>{title}</h2>
                </Link>
                <div className="post-card-content">
                    {children}
                </div>
                <div className="post-card-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={handleClose}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClose}>×</button>
                        <Post title={title} body={children} tags={tags} />
                    </div>
                </div>
            )}
        </>
    )
}

