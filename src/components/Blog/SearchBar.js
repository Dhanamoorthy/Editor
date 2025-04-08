import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        mt: 0,
        mb: 2,
        pr: { xs: 1, sm: 2, md: 4 }, // 👈 Push it more to the right
      }}
    >
      <TextField
        size="small"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          maxWidth: 250,
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
        }}
        inputProps={{
          style: { fontSize: '0.9rem', padding: '8px 12px' },
        }}
      />
    </Box>
  );
};

export default SearchBar;
