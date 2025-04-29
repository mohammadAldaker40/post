export async function getDataFetch() {
  const res = await fetch('https://dummyjson.com/posts');
  const data = await res.json();
  return data;
}

export async function getPostById(id) {
  try {
    console.log('Making API request to:', `https://dummyjson.com/posts/${id}`);
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('API response:', data);
    
    if (!data || data.message === "Post not found") {
      throw new Error('Post not found');
    }
    
    return data;
  } catch (error) {
    console.error('Error in getPostById:', error);
    throw error;
  }
}


export async function fetchAddPost(title, text, userId) {
  const res = await fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      userId: userId,
      body: text
      /* other post data */
    })
  })
  const data = res.json()
  return data;
}

export async function getUsers() {
  const response = await fetch("https://dummyjson.com/users");
  const userData = await response.json();
  console.log(userData);

  return userData;

}


export async function getSearchPost(query) {
  const response = await fetch(`https://dummyjson.com/posts/search?q=${encodeURIComponent(query)}`);
  const searchData = await response.json();
  return searchData;
}