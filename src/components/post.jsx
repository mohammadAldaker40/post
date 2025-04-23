import { Link } from "react-router-dom"


export default function Post({title, body, tags , reactions}) {
    return (
        <div className="post-details-container">
            
                <h1 className="post-detailes-header">{title}</h1>
            
            <p className="post-detailes-body">{body}</p>
            <span className="likes">Likes : {reactions.likes}</span>
            <span className="dislikes">DisLikes : {reactions.dislikes}</span>
            <div className="post-detailes-tags">
                {tags.map((tag) => (
                    <li className="tags" key={tag}>{tag}</li>
                ))}
                <Link to={"/"}>
                    <button className="backBtn">
                        return to home page
                    </button>
                </Link>
            </div>
        </div>
    )
}