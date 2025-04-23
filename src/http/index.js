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


export async function fetchAddPost (title , text , userId) {
    const res = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title,
          userId: userId,
          body:text
          /* other post data */
        })
      })
      const data = res.json()
      return data ; 
    }