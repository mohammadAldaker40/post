export default function PostCard({children, title, tags = []}) {

    return (
        <div className="post-card tags">
            <h1>{title}</h1>
            <p>{children}</p>
            <h2>Tags</h2>
            
                {tags.map(
                    (tag) => {
                        return (
                            <li key={tag}>{tag}</li>
                        )
                    }
                )}
            
        </div>
    )
}

