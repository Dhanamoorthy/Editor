import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

const BlogPostCard = ({ post }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 3,
        boxShadow: 3,
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={post.image}
        alt={post.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ flexGrow: 1 }}
        >
          {post.summary.length > 150
            ? `${post.summary.substring(0, 150)}...`
            : post.summary}
        </Typography>

        {/* Read more link */}
        <Box mt={2}>
          <Typography
            component={Link}
            to={`/blog/${post.id}`}
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 500,
              display: 'inline-block',
            }}
          >
            Read more →
          </Typography>
        </Box>

        <Box mt={1}>
          <Typography variant="caption" color="text.secondary">
            By {post.author} • {post.date}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;
