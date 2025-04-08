import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, TextField, Button } from '@mui/material';
import BlogPostCard from './BlogPostCard';
import SearchBar from './SearchBar';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const defaultPosts = [
    {
      id: 1,
      title: 'Alight Motion Trending Eye Editing',
      summary: 'As a visual editor, I’ve always been drawn to eye edits...',
      author: 'Visual Creator',
      date: '2025-04-03',
      image: 'https://rceditsofficial.in/wp-content/uploads/2025/04/EYE.jpg',
    },
    {
      id: 2,
      title: 'Eye Editing',
      summary: 'Eye editing is a growing trend in photo and video editing...',
      author: 'Visual Creator',
      date: '2025-04-02',
      image: 'https://rceditsofficial.in/wp-content/uploads/2025/04/hq720-6.jpg',
    },
  ];

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : defaultPosts;
  });

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const [newPost, setNewPost] = useState({
    title: '',
    summary: '',
    author: '',
    image: '',
    date: '',
  });

  const handleAddPost = () => {
    if (!newPost.title || !newPost.summary || !newPost.image || !newPost.author || !newPost.date) return;

    const newId = posts.length + 1;
    const blog = {
      id: newId,
      ...newPost,
    };

    setPosts((prev) => [...prev, blog]);
    setNewPost({ title: '', summary: '', author: '', image: '', date: '' });
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Editor's Blog – Creative Tips & Ideas
      </Typography>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <BlogPostCard post={post} />
              </Box>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ m: 2 }}>
              No posts found.
            </Typography>
          </Grid>
        )}
      </Grid>

      {/* Add Blog Form – Vertically Below */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" gutterBottom>
          ➕ Add a New Blog Post
        </Typography>
        <TextField
          fullWidth
          label="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Summary"
          value={newPost.summary}
          onChange={(e) => setNewPost({ ...newPost, summary: e.target.value })}
          margin="normal"
          multiline
          rows={3}
        />
        <TextField
          fullWidth
          label="Author"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Image URL"
          value={newPost.image}
          onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Date"
          type="date"
          value={newPost.date}
          onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddPost}
          sx={{ mt: 3 }}
        >
          Add Blog
        </Button>
      </Box>
    </Container>
  );
};

export default Blog;
