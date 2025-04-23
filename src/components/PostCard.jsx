import { Link } from "react-router-dom"
export default function PostCard({children, title , tags = [] , id }) {

    return (
        <div className="post-card">
            <Link  id="linkpost" to={`/post/${id}`} >
                <h2>{title}</h2>
            </Link>
            <div className="post-card-content">
                {children}
            </div>
            <div className="post-card-tags">
            {tags.map(
                (tag) => {
                    return (
                         <li className="tags" key={tag}>{tag}</li>
                    )
                }
            )}
            </div>
        </div>
    )
}

