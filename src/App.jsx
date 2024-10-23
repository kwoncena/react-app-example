
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import StyledButton from './StyledButton'
import Welcome from './Welcome'
import Counter from './Counter'
import Form from './Form'

import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [post, setPost] = useState(null);

  useEffect(() => {
    // fetching the post data based on the count value
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
      document.title = `You clicked ${count} times`;
  }, [count]); // The effect depends on the count

  return (
    <div>
      <p>Current Post ID: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Next Post
      </button>

      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
