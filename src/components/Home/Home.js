import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #0f0f0f, #1a1a1a)',
        color: '#fff',
        minHeight: '100vh',
        py: 5,
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              animation: 'zoomIn 1s ease-out',
              '@keyframes zoomIn': {
                from: { opacity: 0, transform: 'scale(0.95)' },
                to: { opacity: 1, transform: 'scale(1)' },
              },
              fontWeight: 600,
            }}
          >
            Welcome to RC Edits
          </Typography>
          <Typography
            variant="h6"
            color="grey.400"
            sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}
          >
            I’m a visual editor obsessed with detail — from eye glows to surreal frames.
            This is where editing becomes emotion. Explore my work, discover tips, and get
            inspired to craft your own visual style.
          </Typography>
        </Box>

        {/* Creative Vision Section */}
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            🎥 The Editor’s Eye
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 650, mx: 'auto', color: 'grey.400' }}
          >
            Great edits don’t just cut clips — they shape energy. Whether I’m designing
            motion for a reel, stylizing an eye glow, or layering textures in a cinematic
            sequence, my goal is to make each second feel alive.
          </Typography>
        </Box>

        {/* What I Do Section */}
        <Box sx={{ mt: 12 }}>
          <Typography variant="h5" gutterBottom>
            ✂️ What I Do
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: 'Cinematic Eye Effects',
                desc: 'From subtle iris tweaks to neon-styled glows, I transform eyes into the emotional centerpiece of a shot.',
              },
              {
                title: 'Poster & Reel Design',
                desc: 'Bold layouts, deep shadows, and crisp type — designed to grab attention within seconds.',
              },
              {
                title: 'VFX & Motion',
                desc: 'Particles, light leaks, and zoom transitions. I bring movement that’s both smooth and impactful.',
              },
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper
                  elevation={6}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                    background: 'linear-gradient(145deg, #222, #1a1a1a)',
                    color: '#fff',
                    boxShadow: '0 0 20px rgba(255,255,255,0.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="grey.400">
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* About the Creator */}
        <Box sx={{ mt: 12, mb: 5, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            👋 Who I Am
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 600, mx: 'auto', color: 'grey.400' }}
          >
            I’m a self-taught visual editor and VFX artist from Tamil Nadu. My work is
            inspired by music, anime, mood, and motion. Every piece you see here is crafted
            with care — layered, colored, and timed to express emotion in every frame.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
