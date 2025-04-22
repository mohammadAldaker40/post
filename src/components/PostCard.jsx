
export default function PostCard({children, title, tags = []  }) {

    return (
        <div className="post-card">
                
            <div className="post-card-content">
                {children}
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

