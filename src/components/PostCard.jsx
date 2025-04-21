export default function PostCard({children, title, tags = []}) {

    return (
        <div className="post-card">
            <div className="post-card-header">
            <h2>{title}</h2>
            </div>
            <div className="post-card-content">
                <p>{children}</p>
            </div>
            <h3>Tags</h3>
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

