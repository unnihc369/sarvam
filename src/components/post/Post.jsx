// PostPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostPage() {
    const [username, setUsername] = useState('');
    const [desc, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [posts, setPosts] = useState([]);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to create a new post
            const response = await axios.post('http://localhost:5000/post', {
                username,
                desc,
                image
            });
            console.log(response.data);
            // Clear the form fields after successful submission
            setUsername('');
            setDescription('');
            setImage('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={desc} onChange={(e) => setDescription(e.target.value)} required />
                <label htmlFor="image">Image (optional):</label>
                <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            <h1>All Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <p>Username: {post.username}</p>
                        <p>Description: {post.desc}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostPage;
