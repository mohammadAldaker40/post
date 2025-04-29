import { useNavigate } from "react-router-dom";

export default function Post({ title, body, tags = [], reactions = 0 }) {
    const navigate = useNavigate();

    return (
        <div className="post-details-wrapper">
            <div className="post-details-header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Back
                </button>
                <h1>{title}</h1>
            </div>
            
            <div className="post-details-content">
                <p>{body}</p>
                
                <div className="post-details-footer">
                    {tags && tags.length > 0 && (
                        <div className="tags-list">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                    
                    <div className="reactions">
                        <span className="reaction-count">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                            </svg>
                            <span>likes : {reactions.likes}</span>
                            <span>dislikes : {reactions.dislikes}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}