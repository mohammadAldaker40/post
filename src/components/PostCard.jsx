import React from 'react';
import { Link } from "react-router-dom";

const PostCard = ({ children, title, tags = [], id, reactions = 0 }) => {
    // Truncate title if it's too long
    const truncatedTitle = title.length > 60 ? `${title.slice(0, 60)}...` : title;

    return (
        <div className="post-card">
        <Link id="post-card-header-link" to={`/post/${id}`} >
            <div className="post-card-header">
                <h2>{truncatedTitle}</h2>
            </div>
        </Link>  
            <div className="post-card-content">
                <p className="post-excerpt">
                    {typeof children === 'string' && children.length > 150
                        ? `${children.slice(0, 150)}...`
                        : children}
                </p>
            </div>

            <div className="post-card-footer">
                <ul className="post-card-tags">
                    {tags.map((tag, index) => (
                        <li key={`${tag}-${index}`} className="tag">
                            #{tag}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default PostCard;

