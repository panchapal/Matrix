import React from 'react';
import { TextField, Grid, Box } from '@mui/material';

function MatrixTable({ matrix, onChange }) {
  return (
    <Box sx={{  borderRadius: 1, padding: 2}}>
      <Grid container spacing={1}>
        {matrix.map((row, rowIndex) => (
          <Grid container item spacing={1} key={rowIndex}>
            {row.map((cell, colIndex) => (
              <Grid item key={colIndex} xs={2}>
                <TextField
                  type="number"
                  fullWidth
                  variant="outlined"
                  value={cell}
                  onChange={(e) => onChange(rowIndex, colIndex, +e.target.value)}
                />
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MatrixTable;
