export async function getDataFetch() {
    const res = await fetch('https://dummyjson.com/posts');
    const data = await res.json();
    return data;
}

export async function getPostById(id) {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await res.json();
    return data;
}


